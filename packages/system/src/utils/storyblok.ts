import type { MultilinkStoryblok } from "../types/storyblok-components"
import { getStoryPath } from "./storyblok-utils"

export interface StoryblokLinkProps {
  href: string
  target: string
  rel?: string
}

/** Process a Storyblok multilink and return props for Next.js Link component */
export function getStoryblokLinkProps(
  link: MultilinkStoryblok | undefined | null
): StoryblokLinkProps {
  if (!link) {
    return {
      href: "#",
      target: "_self",
    }
  }

  let href = link.url || link.cached_url || "#"

  if (link.linktype === "story" && href && href !== "#") {
    href = getStoryPath(href)
  } else {
    if (href === "home") {
      href = "/"
    }

    // Ensure internal links start with /
    if (href && !href.startsWith("/") && !href.startsWith("http")) {
      href = `/${href}`
    }
  }

  // TODO: Content manage external link atts
  // const isExternal = link.linktype === "url" || href.startsWith("http")

  const target = link.target || "_self"

  const rel = undefined

  return {
    href,
    target,
    rel,
  }
}
