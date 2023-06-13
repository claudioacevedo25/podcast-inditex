import Link from "next/link"
import styles from "@/components/molecules/Header/header.module.css"
import { Typography } from "@mui/material"

export const HeaderComponent = () => (
  <header className={styles.nav__header}>
    <Link href={"/"}>
      <Typography color="blue" variant="h5">
        Podcaster
      </Typography>
    </Link>
  </header>
)
