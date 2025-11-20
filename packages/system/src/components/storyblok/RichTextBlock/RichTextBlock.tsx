import type { RichTextBlockStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { RichText } from "../RichText/RichText"

interface RichTextBlockProps {
  blok: RichTextBlockStoryblok
}

export function RichTextBlock({ blok }: RichTextBlockProps): React.JSX.Element {
  const { content } = blok

  return (
    <CustomElement tag="box-grid">
      {content && <RichText content={content} />}
    </CustomElement>
  )
}
