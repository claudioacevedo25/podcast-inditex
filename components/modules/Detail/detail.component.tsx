import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Typography } from "@mui/material"
import { CardImageAuthor } from "@/components/atoms/CardImageAuthor"
import { ComponentProps } from "./detail.model"
import styles from "./detail.module.css"
import { useRouter } from "next/router"

const columns: GridColDef[] = [
  { field: "trackName", headerName: "Name", width: 600 },
  {
    field: "releaseDate",
    headerName: "Date",
    width: 230,
    valueGetter: (params: GridValueGetterParams) => {
      const releaseDate = params.row.releaseDate
      if (!releaseDate) return "N/A"
      const fullDate = new Date(releaseDate)
      const date = fullDate.toISOString().split("T")[0]
      return date
    },
  },
  {
    field: "trackTimeMillis",
    headerName: "duration",
    type: "number",
    width: 100,
    valueGetter: (params: GridValueGetterParams) => {
      const trackTimeMillis = params.row.trackTimeMillis
      if (!trackTimeMillis) return "N/A"
      const seconds = Math.floor(trackTimeMillis / 1000)
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      return `${hours}hrs ${minutes} min`
    },
  },
]

export const DetailComponent = ({ podcast }: ComponentProps) => {
  const router = useRouter()

  const artist = podcast.results[0]
  const episodes = podcast.results.filter(({ artistIds }) => artistIds)

  const generateRowId = (row: any) =>
    `${row.artistId}-${row.collectionId}-${row.trackId}`
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
          />
        </div>
        <div className={styles.details}>
          <div className={styles.count}>
            <Typography variant="h6">
              Episodes: {podcast.resultCount}
            </Typography>
          </div>
          <div className={styles.table__container}>
            <DataGrid
              rows={episodes}
              columns={columns}
              getRowId={generateRowId}
            />
          </div>
        </div>
      </div>
    </>
  )
}
