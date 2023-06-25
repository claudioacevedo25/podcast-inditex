import { PodcastResponse } from "@/services/models/podcast.models"

type HomeProps = {
  podcasts: PodcastResponse["contents"]
  handleSearch: (event: any) => void
}

export type { HomeProps }
