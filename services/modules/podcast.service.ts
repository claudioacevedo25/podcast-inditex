import api from "../api.client"
import { PodcastResponse } from "../models/podcast.models"
import { PODCAST_URL, BASE_URL_ALL_ORIGINS } from "@/constants/urls.const"

const podcastService = {
  getPodcasts: async () => {
    const path = `${BASE_URL_ALL_ORIGINS}${encodeURIComponent(PODCAST_URL)}`
    const { data } = await api.get<PodcastResponse>(path)

    const parsedData = JSON.parse(String(data.contents))
    return parsedData
  },
}

export { podcastService }
