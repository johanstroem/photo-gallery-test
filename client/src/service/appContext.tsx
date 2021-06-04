import React, { createContext, useContext, useReducer } from 'react'
import { getPhotos, Photo } from './photos'

type Action = { type: 'get'; payload: Photo[] }

type Dispatch = (action: Action) => void
type State = {
  photos: Photo[]
}

type AppProviderProps = { children: React.ReactNode }

const AppStateContext =
  createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

AppStateContext.displayName = 'AppContext'

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'get': {
      return {
        ...state,
        photos: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}

function AppProvider({ children }: AppProviderProps) {
  const photos = getPhotos()
  const initialState: State = {
    photos,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch }

  return (
    <AppStateContext.Provider value={value}>
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
