import { DetailPodcastResponse } from "@/services/models/podcast.models"

type ContainerProps = {
  id: string
}

type ComponentProps = {
  podcast: DetailPodcastResponse["contents"]
}

export type { ContainerProps, ComponentProps }
