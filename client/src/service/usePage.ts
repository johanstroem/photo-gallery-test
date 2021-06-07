import { useState } from 'react'

export const usePage = (p=1) => {
  const [page, setPage] = useState(p)

  const updatePage = (nextPage: number) => {
    setPage(nextPage >= 1 ? nextPage : 1)
  }

  return { page, updatePage }
}
