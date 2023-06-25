import { CardImageAuthorComponent } from "./cardImageAuthor.component"

type Props = {
  image: string
  author: string
  collectionName: string
  description: string
  id?: number
}

export const CardImageAuthorContainer = (props: Props) => (
  <CardImageAuthorComponent {...props} />
)
