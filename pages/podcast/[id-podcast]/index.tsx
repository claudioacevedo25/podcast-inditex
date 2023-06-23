import { Detail } from "@/components/modules/Detail"
import { useRouter } from "next/router"

const DetailPodcastPage = () => {
  const router = useRouter()
  const idPodcast = router.query["id-podcast"]
  if (!idPodcast) return null
  return <Detail id={String(idPodcast)} />
}

export default DetailPodcastPage
