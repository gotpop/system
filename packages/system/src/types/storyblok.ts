// Storyblok API response types

export interface StoryblokStoryResponse {
  full_slug: string
  slug: string
  content: unknown
}

export interface StoryblokStoriesResponse {
  stories: StoryblokStoryResponse[]
}

export interface TagDatasourceEntry {
  name: string
  value: string
  id: number
}
