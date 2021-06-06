import { useEffect, useState } from 'react'

const partition = <T>(array: T[], parts: number) => {
  const result = []
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)))
  }
  return result
}

export const useSlices = <T>(array: T[], numberOfSlices: number) => {
  const [slices, setSlices] = useState<T[][]>([])

  useEffect(() => {
    const sliced = partition(array, numberOfSlices)

    setSlices(sliced)
  }, [array])

  return slices
}
