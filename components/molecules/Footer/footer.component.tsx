import Link from "next/link"
import { Typography } from "@mui/material"
import { GitHub, LinkedIn } from "@mui/icons-material"
import styles from "./footer.module.css"

export const FooterComponent = () => (
  <footer className={styles.container}>
    <div>
      <Typography variant="h6" sx={{ color: "#4C596D" }}>
        Made by Maxi Pezzotta
      </Typography>
    </div>
    <div className={styles.container__social}>
      <Link href="https://github.com/claudioacevedo25">
        <GitHub />
      </Link>
      <Link href="https://www.linkedin.com/in/mpezzotta-software-engineer/">
        <LinkedIn />
      </Link>
    </div>
  </footer>
)
