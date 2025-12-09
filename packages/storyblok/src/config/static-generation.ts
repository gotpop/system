import "server-only"

import type { ConfigStoryblok } from "@gotpop/system"
import type { StoryblokStoryResponse } from "../types"
import { getPrefix } from "./prefix-utils"

/** Global stories that should be excluded from static generation */
const EXCLUDED_STORIES = new Set([
  "config",
  "footer",
  "global",
  "header",
  "not-found",
  "site-config",
])

/** Determines if a story should be included in static generation */
export function shouldIncludeStory(
  fullSlug: string,
  config: ConfigStoryblok
): boolean {
  if (EXCLUDED_STORIES.has(fullSlug)) {
    return false
  }

  for (const excluded of EXCLUDED_STORIES) {
    if (fullSlug.includes(`/${excluded}`)) {
      return false
    }
  }

  const prefix = getPrefix(config)

  return fullSlug.startsWith(`${prefix}/`)
}

/** Gets the starts_with parameter for Storyblok API calls */
export function getStartsWithPrefix(config: ConfigStoryblok): string {
  const prefix = getPrefix(config)

  return `${prefix}/`
}

/** Checks if a story is a startpage */
export function isStoryStartpage(story: StoryblokStoryResponse): boolean {
  return Boolean(story.is_startpage)
}

/** Determines if an index route should be generated for a story */
export function shouldGenerateIndexRoute(
  story: StoryblokStoryResponse,
  config: ConfigStoryblok
): boolean {
  if (!isStoryStartpage(story)) {
    return false
  }

  const prefix = getPrefix(config)

  // Don't generate separate index route for homepage
  if (story.full_slug === `${prefix}/`) {
    return false
  }

  return true
}

/** Gets the index path for a startpage story */
export function getStartpageIndexPath(
  fullSlug: string,
  config: ConfigStoryblok
): string {
  const prefix = getPrefix(config)

  // Remove prefix from full_slug
  let pathWithoutPrefix = fullSlug
  if (fullSlug.startsWith(`${prefix}/`)) {
    pathWithoutPrefix = fullSlug.slice(prefix.length + 1)
  }

  // Handle homepage case
  if (pathWithoutPrefix === "" || pathWithoutPrefix === "/") {
    return "/"
  }

  // Remove trailing slash if present and ensure leading slash
  const cleanPath = pathWithoutPrefix.endsWith("/")
    ? pathWithoutPrefix.slice(0, -1)
    : pathWithoutPrefix

  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`
}
