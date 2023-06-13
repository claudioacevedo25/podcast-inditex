import api from "../api.client"
import { PodcastResponse } from "../models/podcast.models"
import { PODCAST_URL } from "@/constants/urls.const"

const podcastService = {
  getPodcasts: async () => {
    const { data } = await api.get<PodcastResponse>(`${PODCAST_URL}`)

    return data
  },
}

export { podcastService }
