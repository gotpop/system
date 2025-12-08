import "server-only"

import type { ConfigStoryblok, PageDefaultStoryblok } from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface StoryblokStory {
  full_slug: string
  content: Record<string, string>
}

interface WithPageDataProps<T extends PageDefaultStoryblok> {
  header: ReactNode
  footer: ReactNode
  blok: T
  blocks: ReactNode
}

/** Higher-Order Component that fetches and renders header and footer components for a page */
export function withPageData<T extends PageDefaultStoryblok>(
  ViewComponent: React.ComponentType<WithPageDataProps<T>>
) {
  return async ({
    blok,
    config: providedConfig,
    story,
  }: {
    blok: T
    config?: ConfigStoryblok | null
    story?: StoryblokStory
  }) => {
    const {
      header: headerUuid = "",
      footer: footerUuid = "",
      meta_data_page: metaDataPage = [],
    } = blok

    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())

    const storyblokApi = getInitializedStoryblokApi()

    const fetchStoryByUuid = async (uuid: string) => {
      if (!uuid) return null

      const response = await storyblokApi.get("cdn/stories", {
        version: "published",
        by_uuids: uuid,
      })

      return response?.data?.stories?.[0] || null
    }

    const headerData = await fetchStoryByUuid(headerUuid)
    const footerData = await fetchStoryByUuid(footerUuid)

    const header = headerData?.content ? (
      <StoryblokServerComponent blok={headerData.content} config={config} />
    ) : null

    const footer = footerData?.content ? (
      <StoryblokServerComponent blok={footerData.content} config={config} />
    ) : null

    const blocks = blok.body?.map((nestedBlok) => {
      // Pass currentStorySlug to pagination components
      const additionalProps =
        nestedBlok.component === "pagination_default" && story
          ? { currentStorySlug: story.full_slug }
          : {}

      return (
        <StoryblokServerComponent
          blok={nestedBlok}
          config={config}
          key={nestedBlok._uid}
          metaDataPage={metaDataPage}
          {...additionalProps}
        />
      )
    })

    return (
      <ViewComponent
        blocks={blocks}
        blok={blok}
        footer={footer}
        header={header}
      />
    )
  }
}
