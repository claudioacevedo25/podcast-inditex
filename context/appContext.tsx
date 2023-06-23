import { createContext, useContext, useMemo, useState } from "react"

import { ContextProps } from "./context.model"

type Props = {
  children: React.ReactNode
}
const defaultValues: ContextProps = {
  podcast: null,
}

const AppContext = createContext(defaultValues)

export function ContextProvider({ children }: Props) {
  const [appState, setAppState] = useState<ContextProps>(defaultValues)

  const updateEpisode = (episode: ContextProps["podcast"]) => {
    setAppState((prevState) => ({ ...prevState, episode }))
  }

  const contextValue = useMemo(
    () => ({ ...appState, updateEpisode }),
    [appState]
  )
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}
