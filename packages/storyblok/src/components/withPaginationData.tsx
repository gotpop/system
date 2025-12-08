import "server-only"

import type {
  ConfigStoryblok,
  PaginationDefaultStoryblok,
} from "@gotpop/system"
import { headers } from "next/headers"
import { getStoryPath } from "../config/path-utils"
import { getConfig } from "../config/runtime-config"
import { getInitializedStoryblokApi } from "../data/get-storyblok-data"

// Temporary types
interface TempStory {
  full_slug: string
  name: string
  content?: {
    title?: string
    // biome-ignore lint/suspicious/noExplicitAny: Temp
    [key: string]: any
  }
  // biome-ignore lint/suspicious/noExplicitAny: Temp
  [key: string]: any
}

interface PaginationData {
  previous: {
    slug: string
    title: string
  }
  next: {
    slug: string
    title: string
  }
}

interface WithPaginationDataProps {
  blok: PaginationDefaultStoryblok
  config: ConfigStoryblok | null
  pagination: PaginationData
}

/** Higher-Order Component that renders pagination content */
export function withPaginationData(
  ViewComponent: React.ComponentType<WithPaginationDataProps>
) {
  return async ({
    blok,
    config: providedConfig,
  }: {
    blok: PaginationDefaultStoryblok
    config?: ConfigStoryblok | null
  }) => {
    // Use provided config or fetch from cache
    const config = providedConfig ?? (await getConfig())
    const { target_index: targetIndex } = blok

    if (!targetIndex) {
      console.warn("withPaginationData: No target_index provided")

      return null
    }

    // Get directory of target index for pagination context
    const storyblokApi = getInitializedStoryblokApi()
    const targetStoryResult = await storyblokApi.get("cdn/stories", {
      version: "published" as const,
      by_uuids: targetIndex,
      excluding_fields: "body,header,footer,created_at,_uid,component,content",
    })

    const targetStory = targetStoryResult.data.stories[0]
    const targetDirectory = targetStory.full_slug
      .split("/")
      .slice(0, -1)
      .join("/")

    const directoryStoriesResult = await storyblokApi.get("cdn/stories", {
      starts_with: targetDirectory,
      version: "published",
      is_startpage: false,
      excluding_fields: "body",
      sort_by: "created_at:asc",
    })

    const allStories = directoryStoriesResult.data.stories as TempStory[]

    const headersList = await headers()
    const pathname =
      headersList.get("x-pathname") || headersList.get("referer") || ""

    let currentStorySlug = ""
    if (pathname) {
      let cleanPath = pathname
      if (pathname.includes("://")) {
        try {
          const url = new URL(pathname)
          cleanPath = url.pathname
        } catch {
          cleanPath = pathname
        }
      }

      const segments = cleanPath.slice(1).split("/").filter(Boolean)

      if (segments[0] === "work" && segments.length > 1) {
        currentStorySlug = `portfolio/work/${segments.slice(1).join("/")}`
      } else {
        const prefix = config?.content_prefix || "blog"
        currentStorySlug =
          segments.length > 0 ? `${prefix}/${segments.join("/")}` : prefix
      }
    }

    const currentIndex = allStories.findIndex(
      (story: TempStory) => story.full_slug === currentStorySlug
    )
    const totalStories = allStories.length

    const pagination: PaginationData = {
      previous: {
        slug: "",
        title: "",
      },
      next: {
        slug: "",
        title: "",
      },
    }

    if (currentIndex >= 0 && totalStories > 1) {
      const prevIndex = currentIndex === 0 ? totalStories - 1 : currentIndex - 1
      const prevStory = allStories[prevIndex]
      pagination.previous = {
        slug: getStoryPath(prevStory.full_slug, config),
        title: prevStory.content?.title || prevStory.name || "Previous Page",
      }

      const nextIndex = currentIndex === totalStories - 1 ? 0 : currentIndex + 1
      const nextStory = allStories[nextIndex]
      pagination.next = {
        slug: getStoryPath(nextStory.full_slug, config),
        title: nextStory.content?.title || nextStory.name || "Next Page",
      }
    }

    return <ViewComponent blok={blok} config={config} pagination={pagination} />
  }
}
