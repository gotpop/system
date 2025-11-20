import type {
  BaselineStatusBlockStoryblok,
  RichTextCodeBlockStoryblok,
  RichtextStoryblok,
  SnippetBlockStoryblok,
} from "../../../types/storyblok-components"
import { BaselineStatusBlock } from "../BaselineStatusBlock/index"
import { RichTextCodeBlock } from "../RichTextCodeBlock/RichTextCodeBlock"
import { SnippetBlock } from "../SnippetBlock/SnippetBlock"
import { RichText } from "./RichText"

interface StoryblokRichTextProps {
  content: RichtextStoryblok
  className?: string
}

export function StoryblokRichText({
  content,
}: StoryblokRichTextProps): React.JSX.Element | null {
  const blokResolvers = {
    baseline_status_block: (props: Record<string, unknown>) => (
      <BaselineStatusBlock blok={props as BaselineStatusBlockStoryblok} />
    ),

    rich_text_code_block: (props: Record<string, unknown>) => (
      <RichTextCodeBlock blok={props as RichTextCodeBlockStoryblok} />
    ),
    snippet_block: (props: Record<string, unknown>) => (
      <SnippetBlock blok={props as SnippetBlockStoryblok} />
    ),
  }

  return <RichText content={content} blokResolvers={blokResolvers} />
}
