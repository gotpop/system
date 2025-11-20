import type { PagePostStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { PageLayout } from "../PageLayout/PageLayout"
import { PostHeader } from "../PostHeader/PostHeader"

interface PagePostProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: PagePostStoryblok
  blocks: React.ReactNode
}

export function PagePost({ header, footer, blok, blocks }: PagePostProps) {
  return (
    <PageLayout header={header} footer={footer}>
      <PostHeader
        heading={blok.heading}
        publishedDate={blok.published_date}
        style={{ viewTransitionName: blok.view_transition_name }}
      />
      <CustomElement tag="main-content">{blocks}</CustomElement>
    </PageLayout>
  )
}
