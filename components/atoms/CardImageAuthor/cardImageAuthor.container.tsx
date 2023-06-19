import { CardImageAuthorComponent } from "./cardImageAuthor.component"

type Props = {
  image: string
  author: string
  collectionName: string
  description: string
}

export const CardImageAuthorContainer = (props: Props) => (
  <CardImageAuthorComponent {...props} />
)
