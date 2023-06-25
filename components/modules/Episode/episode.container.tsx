import { EpisodeComponent } from "./episode.component"

import { useAppContext } from "@/context/appContext"

export const EpisodeContainer = () => {
  const { episode, artist } = useAppContext()

  if (!episode || !artist) return null
  return <EpisodeComponent episode={episode} artist={artist} />
}
