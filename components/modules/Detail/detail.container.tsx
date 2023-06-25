import { useEffect, useState } from "react"
import { DetailPodcastResponse } from "@/services/models/podcast.models"
import { podcastService } from "@/services/modules/podcast.service"
import { DetailComponent } from "./detail.component"
import { ContainerProps } from "./detail.model"
import { useAppContext } from "@/context/appContext"

const { getPodcast } = podcastService

export const DetailContainer = ({ id }: ContainerProps) => {
  const { updateIsLoading } = useAppContext()
  const [podcast, setPodcast] = useState<DetailPodcastResponse["contents"]>()

  const fetchPokemon = async () => {
    try {
      const response = await getPodcast(id)
      setPodcast(response)
    } catch (error) {
      console.error(error)
    }
    updateIsLoading(false)
  }

  useEffect(() => {
    void fetchPokemon()
  }, [])

  if (!podcast) return null
  return <DetailComponent podcast={podcast} />
}
