import { PodcastResponse } from "@/services/models/podcast.models"

type HomeProps = {
  podcasts: PodcastResponse["contents"]
  isLoading: boolean
}

export type { HomeProps }
