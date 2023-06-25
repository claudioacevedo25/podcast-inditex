import Image from "next/image"
import styles from "@/components/atoms/CardImageAuthor/cardImageAuthor.module.css"
import { Divider, Typography } from "@mui/material"
import { useRouter } from "next/router"

type Props = {
  image: string
  author: string
  collectionName: string
  description: string
  id?: number
}

export const CardImageAuthorComponent = ({
  author,
  collectionName,
  image,
  description,
  id,
}: Props) => {
  const router = useRouter()

  const redirectTo = () => {
    if (!id) return
    router.push(`/podcast/${id}`)
  }
  return (
    <div className={styles.container}>
      <div
        className={`${styles.image__container} ${
          id ? styles.image__redirect : ""
        }`}
        onClick={redirectTo}
      >
        <Image
          className={styles.profile}
          src={image}
          alt="profile pic"
          width={200}
          height={200}
        />
      </div>
      <Divider orientation="horizontal" />
      <div className={styles.section}>
        <Typography variant="body1" color="black">
          {collectionName}
        </Typography>
        <Typography
          variant="caption"
          color="grey"
          onClick={redirectTo}
          className={`${id ? styles.image__redirect : ""}`}
        >
          by {author}
        </Typography>
        <Divider orientation="horizontal" />
        <Typography variant="body1" color="black">
          Description:{" "}
          <Typography variant="caption" color="grey">
            {description}
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
