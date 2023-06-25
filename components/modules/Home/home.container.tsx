import { ChangeEvent, useEffect, useState } from "react"
import { PodcastResponse } from "@/services/models/podcast.models"
import { podcastService } from "@/services/modules/podcast.service"
import { HomeComponent } from "./home.component"
import { CircularProgress } from "@mui/material"
import { getPodcastFilter } from "./helpers/home.helpers"

const { getPodcasts } = podcastService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [podcasts, setPodcasts] = useState<PodcastResponse["contents"]>()
  const [filterPodcasts, setFilterPodcasts] =
    useState<PodcastResponse["contents"]>()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!podcasts) return
    const search = event.target.value
    const filters = getPodcastFilter(podcasts, search)
    setFilterPodcasts(filters)
  }

  const fetchPokemons = async () => {
    try {
      const response = await getPodcasts()
      setPodcasts(response)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    void fetchPokemons()
  }, [])

  if (isLoading)
    return (
      <CircularProgress size={80} sx={{ margin: "auto", display: "flex" }} />
    )
  if (!podcasts) return null
  return (
    <HomeComponent
      podcasts={filterPodcasts || podcasts}
      handleSearch={handleSearch}
    />
  )
}
