import type { SnippetBlockStoryblok } from "../../../types/storyblok-components"
import { SnippetTextAlignA } from "../../snippets/SnippetTextAlignA/SnippetTextAlignA"
import { SnippetTextAlignB } from "../../snippets/SnippetTextAlignB/SnippetTextAlignB"
import { CustomElement } from "../../ui/CustomElement"
import "./SnippetBlock.css"

interface SnippetBlockProps {
  blok: SnippetBlockStoryblok
}

function renderSnippet(snippetType?: string) {
  switch (snippetType) {
    case "text-align-a":
      return <SnippetTextAlignA />
    case "text-align-b":
      return <SnippetTextAlignB />
    default:
      return (
        <div className="snippet-placeholder">
          <p>Unknown snippet type: {snippetType || "none"}</p>
        </div>
      )
  }
}

export function SnippetBlock({ blok }: SnippetBlockProps): React.JSX.Element {
  const { snippet } = blok

  return (
    <CustomElement tag="snippet-block">{renderSnippet(snippet)}</CustomElement>
  )
}
