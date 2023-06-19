import { CardImageComponent } from "./cardImage.component"

type Props = {
  title: string
  author: string
  image: string
  id: string
}

export const CardImageContainer = (props: Props) => (
  <CardImageComponent {...props} />
)
