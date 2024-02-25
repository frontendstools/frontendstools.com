'use client'
import React, { FC, useState } from 'react'

export const RevertString: FC = () => {
  const [value, setValue] = useState('')

  const revertText = (text: string) => {
    // 1. Split a string to convert it to an array
    const splitText = [...text]

    // 2. Reverse array using reverse() method
    const reversedText = splitText.reverse()

    // 3. Join array
    const joinedText = reversedText.join('')

    return joinedText
  }

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setValue(value || '')
  }

  return (
    <div className="revertString">
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={handleChangeValue}
          type="text"
          className="m-0 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Introduce un texto"
        />
        {value && (
          <button
            onClick={() => setValue('')}
            className="absolute right-3 z-10 flex h-8 w-8 justify-center rounded-full border  border-gray-300 font-bold hover:border-red-300 hover:bg-red-100 hover:text-red-400"
          >
            &#88;
          </button>
        )}
      </div>
      {value && (
        <div className="rounded-lg bg-gray-100 p-4">
          👉🏻 <span className="text-xl font-bold">{revertText(value)}</span>
        </div>
      )}
    </div>
  )
}
