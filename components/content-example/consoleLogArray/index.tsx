import React, { FC } from 'react'

import { ConsoleLogArrayClient } from './ConsoleLogArrayClient'
import { ArrayMethod } from './types'

interface IConsoleLogArrayProps {
  items: string[]
  runBtnText?: string
  runCode?: string
  arrayMethod: ArrayMethod
}

export const ConsoleLogArray: FC<IConsoleLogArrayProps> = (props) => {
  return <ConsoleLogArrayClient {...props} />
}
