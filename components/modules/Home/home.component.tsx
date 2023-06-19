import { CircularProgress } from "@mui/material"
import { CardImage } from "@/components/atoms/CardImage"
import { HomeProps } from "./home.model"
import styles from "./home.module.css"

export const HomeComponent = ({ podcasts }: HomeProps) => {
  return (
    <div className={styles.container}>
      {podcasts.feed.entry.length && (
        <section className={styles.cards} id="home-cards">
          {podcasts.feed.entry.map((podcast) => (
            <CardImage
              title={podcast.title.label || ""}
              author={podcast["im:artist"]?.label || ""}
              image={podcast["im:image"][2]?.label || ""}
              key={podcast.id?.attributes["im:id"]}
              id={podcast.id.attributes["im:id"]}
            />
          ))}
        </section>
      )}
    </div>
  )
}
