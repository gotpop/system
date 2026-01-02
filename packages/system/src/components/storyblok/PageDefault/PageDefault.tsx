import type { PageDefaultStoryblok } from "../../../types/storyblok-components"
import { PageContentWrapper } from "../PageContentWrapper"
import { PageLayout } from "../PageLayout/PageLayout"

interface PageDefaultProps {
  header: React.ReactNode
  footer: React.ReactNode
  blok: PageDefaultStoryblok
  blocks: React.ReactNode
}

export function PageDefault({ header, footer, blocks }: PageDefaultProps) {
  return (
    <PageContentWrapper>
      <PageLayout header={header} footer={footer}>
        {blocks}
      </PageLayout>
    </PageContentWrapper>
  )
}
