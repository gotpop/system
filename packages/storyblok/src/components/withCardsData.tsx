import "server-only"

import type {
  CardBlokProps,
  CardsClientFilterStoryblok,
  CardsServerStoryblok,
  ConfigStoryblok,
  TagDatasourceEntry,
} from "@gotpop/system"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import type { ReactNode } from "react"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

interface WithCardsDataProps<
  T = CardsServerStoryblok | CardsClientFilterStoryblok,
> {
  blok: T
  blocks: ReactNode
  posts?: CardBlokProps[]
  availableTags: TagDatasourceEntry[]
  config: ConfigStoryblok | null
}

/** Higher-Order Component that fetches posts and tags data for the Cards component */
export function withCardsData<
  T extends CardsServerStoryblok | CardsClientFilterStoryblok,
>(ViewComponent: React.ComponentType<WithCardsDataProps<T>>) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: T
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())
    const componentSelect = blok.component_select || "card"

    const storyblokApi = getInitializedStoryblokApi()
    const tagsResult = await storyblokApi.get("cdn/datasource_entries", {
      datasource: "tags",
    })

    const { target_index: targetIndex } = blok

    const targetStoryResult = await storyblokApi.get(`cdn/stories`, {
      version: "published",
      by_uuids: targetIndex,
      excluding_fields: "body,header,footer,created_at,_uid,component,content",
    })

    const targetDirectory = targetStoryResult.data.stories[0]?.full_slug || ""

    const postsStoriesResult = await storyblokApi.get("cdn/stories", {
      starts_with: targetDirectory,
      version: "published",
      is_startpage: false,
      excluding_fields: "body,header,footer,created_at,_uid,component",
    })

    const postsDataRaw = postsStoriesResult.data?.stories

    const posts = Array.isArray(postsDataRaw)
      ? postsDataRaw.map(({ uuid, content, full_slug }) => {
          const metaData = content?.meta_data_page || []

          return {
            _uid: uuid,
            component: componentSelect,
            full_slug,
            meta_data_page: metaData,
          }
        })
      : []

    const availableTags = tagsResult.data?.datasource_entries || []

    const blocks = posts.map((post) => (
      <StoryblokServerComponent key={post._uid} blok={post} config={config} />
    ))

    return (
      <ViewComponent
        blok={blok}
        blocks={blocks}
        availableTags={availableTags}
        config={config}
        {...(blok.component === "cards_client_filter" ? { posts } : {})}
      />
    )
  }
}
