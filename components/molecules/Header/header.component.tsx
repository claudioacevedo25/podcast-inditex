import Link from "next/link"
import styles from "@/components/molecules/Header/header.module.css"
import { CircularProgress, Typography } from "@mui/material"
import { useAppContext } from "@/context/appContext"

export const HeaderComponent = () => {
  const { isLoading } = useAppContext()
  return (
    <header className={styles.nav__header}>
      <Link href={"/"}>
        <Typography color="blue" variant="h5">
          Podcaster
        </Typography>
      </Link>
      {isLoading && <CircularProgress size={30} />}
    </header>
  )
}
