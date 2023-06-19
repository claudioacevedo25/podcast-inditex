import { useEffect, useState } from "react"
import { PodcastResponse } from "@/services/models/podcast.models"
import { podcastService } from "@/services/modules/podcast.service"
import { HomeComponent } from "./home.component"

const { getPodcasts } = podcastService

export const HomeContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [podcasts, setPodcasts] = useState<PodcastResponse["contents"]>()

  const fetchPokemons = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getPodcasts()
      setPodcasts(response)
    } catch (error) {
      console.error(error)
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchPokemons()
  }, [])

  if (!podcasts) return null
  return <HomeComponent podcasts={podcasts} isLoading={isLoading} />
}
