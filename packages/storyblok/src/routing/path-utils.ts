/** Extracts tag slug from URL segments for tag-based filtering */
export function extractTagSlug(slug?: string[]): string | null {
  if (!slug || slug.length < 2) {
    return null
  }

  return slug[slug.length - 1]
}
