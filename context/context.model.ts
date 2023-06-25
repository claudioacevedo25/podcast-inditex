import { Result } from "@/services/models/podcast.models"

export type ContextProps = {
  episode: Result | null
  artist: Result | null
  updateEpisode: (episode: Result, artist: Result) => void
  isLoading: boolean
  updateIsLoading: (isLoading: boolean) => void
}
