import React, { createContext, useContext, useEffect, useState } from 'react'
import { getPhotos, Person } from './photos'
import { usePage } from './usePage'

type State = {
  persons: Person[]
  loading: boolean
  pagination: {
    page: number
    setPage: (p: number) => void
  }
}

type AppProviderProps = { children  : React.ReactNode }

const AppStateContext = createContext<State | undefined>(undefined)

AppStateContext.displayName = 'AppContext'

function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Person[]>([])
  const { page, updatePage: setPage } = usePage(1)

  const loadData = async (nextPage=1) => {
    setLoading(true)
    const response = await getPhotos(nextPage)
    setData(response.results)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    loadData(page)
  }, [page])

  return (
    <AppStateContext.Provider 
      value={{ loading, persons: data, pagination: { page, setPage } }}>
      {children}
    </AppStateContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppStateContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
export { AppProvider, useAppContext }
