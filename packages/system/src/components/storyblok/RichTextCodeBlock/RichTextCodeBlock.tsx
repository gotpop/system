import type { RichTextCodeBlockStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { RichText } from "../RichText/RichText"
import "./RichTextCodeBlock.css"

interface RichTextCodeBlockProps {
  blok: RichTextCodeBlockStoryblok
}

export function RichTextCodeBlock({
  blok,
}: RichTextCodeBlockProps): React.JSX.Element {
  const { content } = blok

  return (
    <CustomElement tag="code-block">
      {content && <RichText content={content} />}
    </CustomElement>
  )
}
