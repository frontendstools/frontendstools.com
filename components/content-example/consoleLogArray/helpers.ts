import { ArrayMethod } from './types'

const runLengthMethod = (
  items: string[],
  remove: 'lastThree' | 'lengthRemoveLast' = 'lengthRemoveLast'
) => {
  if (remove === 'lengthRemoveLast') {
    const arrayItems = [...items]
    const returnValue = (arrayItems.length =
      arrayItems.length > 0 ? arrayItems.length - 1 : arrayItems.length)
    return { arrayItems, returnValue }
  }

  // eliminar los últimos 3 elementos
  const arrayItems = [...items]
  const returnValue = (arrayItems.length =
    arrayItems.length >= 3 ? arrayItems.length - 3 : arrayItems.length)
  return { arrayItems, returnValue }
}
// RUN EXAMPLES
const runExample = (
  arrayMethod: ArrayMethod,
  items: string[],
  setArrayItems: (items: unknown) => void,
  setReturnValue: (items: unknown) => void
) => {
  if (!arrayMethod) return
  if (!items) return

  if (arrayMethod === 'shift') {
    const arrayItems = [...items]
    const returnValue = arrayItems.shift()

    console.log({ arrayItems, returnValue })

    setArrayItems(arrayItems)
    setReturnValue(returnValue)
    return
  }

  if (arrayMethod === 'pop') {
    const arrayItems = [...items]
    const returnValue = arrayItems.pop()

    console.log({ arrayItems, returnValue })

    setArrayItems(arrayItems)
    setReturnValue(returnValue)
    return
  }

  if (arrayMethod === 'filter') {
    const arrayItems = [...items]
    const jsLibraries = ['react', 'redux', 'vue', 'D3', 'Chart']
    const filteredLibraries = jsLibraries.filter((item) => item !== 'react')

    console.log({ jsLibraries: arrayItems, filteredLibraries })

    setArrayItems(arrayItems)
    setReturnValue(filteredLibraries)
    return
  }

  if (arrayMethod === 'splice') {
    const arrayItems = [...items]
    const returnValue = arrayItems.splice(1, 3)

    console.log({ jsLibraries: arrayItems, removedLibraries: returnValue })

    setArrayItems(arrayItems)
    setReturnValue(returnValue)
    return
  }

  if (arrayMethod === 'lengthRemoveLast') {
    const { arrayItems, returnValue } = runLengthMethod(items, 'lengthRemoveLast')
    setArrayItems(arrayItems)
    setReturnValue(returnValue)
    return
  }

  if (arrayMethod === 'lengthRemoveLastThree') {
    const { arrayItems, returnValue } = runLengthMethod(items, 'lastThree')
    setArrayItems(arrayItems)
    setReturnValue(returnValue)
    return
  }
}

export const exampleArrayMethods = {
  runExample,
}
