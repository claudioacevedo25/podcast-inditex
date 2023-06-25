import Image from "next/image"
import styles from "@/components/atoms/CardImage/cardImage.module.css"
import { Typography } from "@mui/material"
import { useAppContext } from "@/context/appContext"
import { useRouter } from "next/router"
import { Props } from "./cardImage.model"

export const CardImageComponent = ({ title, author, image, id }: Props) => {
  const { updateIsLoading } = useAppContext()
  const router = useRouter()

  const handleRedirect = () => {
    updateIsLoading(true)
    router.push(`/podcast/${id}`)
  }
  return (
    <div className={styles.card__container} onClick={handleRedirect}>
      <div className={styles.image__container}>
        <Image
          className={styles.profile}
          src={image}
          alt="profile pic"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.section}>
        <Typography variant="body1" color="black">
          {title}
        </Typography>
        <Typography variant="caption" color="grey">
          Author: {author}
        </Typography>
      </div>
    </div>
  )
}
