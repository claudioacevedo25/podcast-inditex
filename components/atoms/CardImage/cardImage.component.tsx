import Image from "next/image"
import styles from "@/components/atoms/CardImage/cardImage.module.css"
import { Typography } from "@mui/material"
import Link from "next/link"

type Props = {
  title: string
  author: string
  image: string
  id: string
}

export const CardImageComponent = ({ title, author, image, id }: Props) => {
  return (
    <Link href={`/podcast/${id}`}>
      <div className={styles.card__container}>
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
    </Link>
  )
}
