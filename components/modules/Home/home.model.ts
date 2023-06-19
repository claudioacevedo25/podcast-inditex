import { PodcastResponse } from "@/services/models/podcast.models"

type HomeProps = {
  podcasts: PodcastResponse["contents"]
}

export type { HomeProps }
