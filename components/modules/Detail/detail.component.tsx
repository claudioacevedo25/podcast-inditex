import { DataGrid } from "@mui/x-data-grid"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { Typography } from "@mui/material"
import { CardImageAuthor } from "@/components/atoms/CardImageAuthor"
import { ComponentProps } from "./detail.model"
import { useRouter } from "next/router"
import { Result } from "@/services/models/podcast.models"
import { useAppContext } from "@/context/appContext"
import styles from "./detail.module.css"
import { columns } from "./helpers/detail.helpers"

export const DetailComponent = ({ podcast }: ComponentProps) => {
  const router = useRouter()
  const { updateEpisode } = useAppContext()

  const artist = podcast.results[0]
  const episodes = podcast.results.filter(({ artistIds }) => artistIds)

  const generateRowId = (row: any) =>
    `${row.artistId}-${row.collectionId}-${row.trackId}`

  const redirectToEpisode = (item: any) => {
    const row = item.row as Result
    updateEpisode(row, artist)
    router.push(`/podcast/${row.collectionId}/episode/${row.trackId}`)
  }
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
              onRowClick={(item) => redirectToEpisode(item)}
              hideFooter
              sx={{
                ".MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-row:hover": {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
