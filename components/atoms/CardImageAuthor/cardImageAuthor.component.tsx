import Image from "next/image"
import styles from "@/components/atoms/CardImageAuthor/cardImageAuthor.module.css"
import { Divider, Typography } from "@mui/material"

type Props = {
  image: string
  author: string
  collectionName: string
  description: string
}

export const CardImageAuthorComponent = ({
  author,
  collectionName,
  image,
  description,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
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
        <Typography variant="caption" color="grey">
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
