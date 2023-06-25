import { createContext, useContext, useMemo, useState } from "react"

import { ContextProps } from "./context.model"

type Props = {
  children: React.ReactNode
}
const defaultValues: ContextProps = {
  episode: null,
  artist: null,
  isLoading: true,
  updateEpisode: () => {},
  updateIsLoading: () => {},
}

const AppContext = createContext(defaultValues)

export function ContextProvider({ children }: Props) {
  const [appState, setAppState] = useState<ContextProps>(defaultValues)

  const updateEpisode = (
    episode: ContextProps["artist"],
    artist: ContextProps["artist"]
  ) => {
    setAppState((prevState) => ({ ...prevState, episode, artist }))
  }
  const updateIsLoading = (isLoading: boolean) => {
    setAppState((prevState) => ({ ...prevState, isLoading }))
  }

  const contextValue = useMemo(
    () => ({ ...appState, updateEpisode, updateIsLoading }),
    [appState]
  )
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}
