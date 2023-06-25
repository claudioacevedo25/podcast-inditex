import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

export const columns: GridColDef[] = [
  { field: "trackName", headerName: "Name", flex: 1 },
  {
    field: "releaseDate",
    headerName: "Date",
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
