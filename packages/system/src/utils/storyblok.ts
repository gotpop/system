import type { MultilinkStoryblok } from "../types/storyblok-components"
import { getStoryPath } from "./storyblok-utils"

export interface StoryblokLinkProps {
  href: string
  target: string
  rel?: string
}

/**
 * Process a Storyblok multilink and return props for Next.js Link component
 */
export function getStoryblokLinkProps(
  link: MultilinkStoryblok | undefined | null
): StoryblokLinkProps {
  // Handle null/undefined link
  if (!link) {
    return {
      href: "#",
      target: "_self",
    }
  }

  // Get the URL from either url or cached_url (for story links)
  let href = link.url || link.cached_url || "#"

  // For internal story links, clean up the path by removing blog/ prefix
  if (link.linktype === "story" && href && href !== "#") {
    href = getStoryPath(href)
  } else {
    // Convert "home" to "/" for root page
    if (href === "home") {
      href = "/"
    }

    // Ensure internal links start with /
    if (href && !href.startsWith("/") && !href.startsWith("http")) {
      href = `/${href}`
    }
  }

  // Determine if it's an external link
  // const isExternal = link.linktype === "url" || href.startsWith("http")

  // Set target based on explicit target only, default to _self for all links
  const target = link.target || "_self"

  // Add security attributes for external links that open in new tab
  const rel = undefined

  return {
    href,
    target,
    rel,
  }
}
