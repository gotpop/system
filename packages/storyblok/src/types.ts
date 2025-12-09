export interface StoryblokStoryResponse<T = unknown> {
  full_slug: string
  slug: string
  content: T
  is_startpage: boolean
}

export interface StoryblokStoriesResponse {
  stories: StoryblokStoryResponse[]
}
