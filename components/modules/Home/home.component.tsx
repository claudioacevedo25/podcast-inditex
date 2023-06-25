import { Alert, TextField } from "@mui/material"
import { CardImage } from "@/components/atoms/CardImage"
import { HomeProps } from "./home.model"
import styles from "./home.module.css"

const placeholderSearch = "Filter Podcast"
const emptyPodcast = "There are not results"
export const HomeComponent = ({ podcasts, handleSearch }: HomeProps) => {
  const areResults = Boolean(podcasts.feed.entry.length)
  return (
    <div className={styles.container}>
      <div className={styles.search__input}>
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          placeholder={placeholderSearch}
        />
      </div>
      {!areResults && (
        <Alert
          severity="warning"
          variant="outlined"
          className={styles.alert__messages}
        >
          {emptyPodcast}
        </Alert>
      )}
      {areResults && (
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
