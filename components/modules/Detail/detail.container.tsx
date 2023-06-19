import { useEffect, useState } from "react"
import { DetailPodcastResponse } from "@/services/models/podcast.models"
import { podcastService } from "@/services/modules/podcast.service"
import { DetailComponent } from "./detail.component"
import { ContainerProps } from "./detail.model"
import { CircularProgress } from "@mui/material"

const { getPodcast } = podcastService

export const DetailContainer = ({ id }: ContainerProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [podcast, setPodcast] = useState<DetailPodcastResponse["contents"]>()

  const fetchPokemon = async () => {
    try {
      const response = await getPodcast(id)
      setPodcast(response)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    void fetchPokemon()
  }, [])

  if (isLoading)
    return (
      <CircularProgress size={80} sx={{ margin: "auto", display: "flex" }} />
    )
  if (!podcast) return null
  return <DetailComponent podcast={podcast} />
}
