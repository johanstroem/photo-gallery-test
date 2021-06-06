import React, { createContext, useContext, useEffect, useState } from 'react'
import { getPhotos, Person } from './photos'

type State = {
  persons: Person[]
  loading: boolean
}

type AppProviderProps = { children: React.ReactNode }

const AppStateContext = createContext<State | undefined>(undefined)

AppStateContext.displayName = 'AppContext'

function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Person[]>([])

  const loadData = async () => {
    setLoading(true)
    const response = await getPhotos()
    setData(response.results)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <AppStateContext.Provider value={{ loading, persons: data }}>
      {children}
    </AppStateContext.Provider>
  )
}

function useAppContext() {
  const context = useContext(AppStateContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a CountProvider')
  }
  return context
}
export { AppProvider, useAppContext }
