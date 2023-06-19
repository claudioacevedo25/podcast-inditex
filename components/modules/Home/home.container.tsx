import { useEffect, useState } from "react"
import { PodcastResponse } from "@/services/models/podcast.models"
import { podcastService } from "@/services/modules/podcast.service"
import { HomeComponent } from "./home.component"
import { CircularProgress } from "@mui/material"

const { getPodcasts } = podcastService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [podcasts, setPodcasts] = useState<PodcastResponse["contents"]>()

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
  return <HomeComponent podcasts={podcasts} />
}
