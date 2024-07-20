'use client'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { ArrayMethod } from './types'
import { exampleArrayMethods } from './helpers'

interface IConsoleLogArrayProps {
  items: string[]
  runBtnText?: string
  runCode?: string
  arrayMethod: ArrayMethod
}

export const ConsoleLogArrayClient: FC<IConsoleLogArrayProps> = ({
  items,
  runBtnText = 'Remove item',
  runCode,
  arrayMethod,
}) => {
  const [arrayItems, setArrayItems] = useState<string[]>(items)
  const [returnValue, setReturnValue] = useState<unknown>(-1)

  useEffect(() => {
    setArrayItems(items)
  }, [items])

  const handleReset = useCallback(() => {
    setArrayItems(items)
    setReturnValue(-1)
  }, [items])

  return (
    <div className="-mt-7 grid grid-cols-1 gap-y-2 border-l-4 border-gray-800 bg-gray-100 px-4 pb-4 pt-6 shadow-md dark:bg-gray-700">
      <span className="col-span-2 my-0 mb-2 block bg-white p-3 text-gray-400 shadow-sm dark:bg-gray-800">
        {runCode && (
          <>
            {`> ${runCode}`}
            <br />
          </>
        )}
        {returnValue !== -1 && (
          <>
            {`> (${arrayItems.length}) `}
            {JSON.stringify(arrayItems)}{' '}
            <span className="text-gray-300"> {'// New array value'}</span>
            <br />
            {`> ${returnValue}`}
            <span className="text-gray-300"> {'// return value'}</span>
          </>
        )}
      </span>
      <div className="flex">
        <button
          className="mr-2 block w-1/2 rounded border border-gray-200 bg-white px-2 py-1 text-gray-400 hover:border-gray-400 hover:text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-900 dark:hover:text-gray-200"
          onClick={() =>
            exampleArrayMethods.runExample(arrayMethod, arrayItems, setArrayItems, setReturnValue)
          }
        >
          {runBtnText}
        </button>
        <button
          disabled={arrayItems.length === items.length}
          className="block w-1/2 rounded border border-gray-200 bg-white px-2 py-1 text-gray-400 hover:border-gray-400 hover:text-gray-600 disabled:cursor-not-allowed dark:border-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
