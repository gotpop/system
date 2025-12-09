/**
 * Content prefix for multi-tenant Storyblok setup
 * Falls back to "blog" if not set
 */
const CONTENT_PREFIX = process.env.STORYBLOK_CONTENT_PREFIX || "blog"

export function getStoryPath(fullSlug: string): string {
  if (!fullSlug) return "/"

  // Remove content prefix dynamically (e.g., "blog/" or "portfolio/")
  let path = fullSlug

  if (fullSlug.startsWith(`${CONTENT_PREFIX}/`)) {
    path = fullSlug.slice(CONTENT_PREFIX.length + 1)
  }

  // Handle special cases
  if (path === "home" || path === "" || path === "/") {
    return "/"
  }

  // Handle index pages (ending with /) - remove trailing slash
  if (path.endsWith("/") && path !== "/") {
    const cleanPath = path.slice(0, -1)
    return `/${cleanPath}`
  }

  // Ensure leading slash for all other paths
  return path.startsWith("/") ? path : `/${path}`
}
