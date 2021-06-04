import React, { createContext, useContext, useEffect, useState } from 'react'
import { getPhotos, Photo } from './photos'

type State = {
  photos: Photo[]
  loading: boolean
}

type AppProviderProps = { children: React.ReactNode }

const AppStateContext = createContext<State | undefined>(undefined)

AppStateContext.displayName = 'AppContext'

function AppProvider({ children }: AppProviderProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Photo[]>([])

  const loadData = async () => {
    setLoading(true)
    const response = await getPhotos()
    setData(response.results)
    setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  const initialState: State = {
    photos: data,
    loading,
  }

  return (
    <AppStateContext.Provider value={{ loading, photos: data }}>
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
