import api from "../api.client"
import {
  DetailPodcastResponse,
  PodcastResponse,
} from "../models/podcast.models"
import {
  PODCAST_URL,
  BASE_URL_ALL_ORIGINS,
  BASE_URL,
} from "@/constants/urls.const"

const podcastService = {
  getPodcasts: async () => {
    const path = `${BASE_URL_ALL_ORIGINS}${encodeURIComponent(PODCAST_URL)}`
    const { data } = await api.get<PodcastResponse>(path)

    const parsedData = JSON.parse(String(data.contents))
    return parsedData
  },

  getPodcast: async (id: string) => {
    const path = `${BASE_URL_ALL_ORIGINS}${encodeURIComponent(`${BASE_URL}/lookup?id=${id}&media=podcast
    &entity=podcastEpisode&limit=20`)}`
    const { data } = await api.get<DetailPodcastResponse>(path)
    const parsedData = JSON.parse(String(data.contents))
    return parsedData
  },
}

export { podcastService }
