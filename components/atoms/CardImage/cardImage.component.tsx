import Image from "next/image"
import styles from "@/components/atoms/CardImage/cardImage.module.css"

type Props = {
  title: string
  author: string
  image: string
}

export const CardImageComponent = ({ title, author, image }: Props) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.image__container}>
        <Image
          className={styles.profile}
          src={image}
          alt="profile pic"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.section}>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}
