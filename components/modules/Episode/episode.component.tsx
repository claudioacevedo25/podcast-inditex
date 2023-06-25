import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Typography } from "@mui/material"
import { CardImageAuthor } from "@/components/atoms/CardImageAuthor"
import { ComponentProps } from "./episode.model"
import { useRouter } from "next/router"
import styles from "./episode.module.css"

export const EpisodeComponent = ({ episode, artist }: ComponentProps) => {
  const router = useRouter()

  return (
    <>
      <KeyboardBackspaceIcon
        onClick={() => router.back()}
        className={styles.back__arrow}
        fontSize="large"
      />

      <div className={styles.container}>
        <div className={styles.author}>
          <CardImageAuthor
            author={artist?.artistName || ""}
            image={artist?.artworkUrl600}
            description={artist?.collectionExplicitness || ""}
            collectionName={artist.collectionName}
            id={artist.collectionId}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.table__container}>
            <div className={styles.episode}>
              <Typography variant="h5" fontWeight={600}>
                {episode.trackName}
              </Typography>
            </div>
            <div
              className={styles.episode__description}
              dangerouslySetInnerHTML={{ __html: episode.description || "" }}
            ></div>
            <div className={styles.episode}>
              <audio controls>
                <source src={episode.episodeUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
