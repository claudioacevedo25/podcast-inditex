import { PodcastResponse } from "@/services/models/podcast.models"

export const getPodcastFilter = (
  podcasts: PodcastResponse["contents"],
  search: string
) => {
  const filters =
    podcasts?.feed.entry.filter(
      ({ "im:artist": artist, "im:name": name }) =>
        artist.label.toLowerCase().includes(search.toLowerCase()) ||
        name.label.toLowerCase().includes(search.toLowerCase())
    ) ?? []
  const newSearch = {
    ...podcasts,
    feed: { entry: filters },
  } as PodcastResponse["contents"]

  return newSearch
}
