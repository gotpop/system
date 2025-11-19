import type { PostProps } from "./Card"

export const mockConfig = {
  component: "Config" as const,
  app_name: "GotPop Blog",
  root_name_space: "blog",
  primary_content_name_space: "blog",
  _uid: "config-123",
}

export const baseMockPost: PostProps = {
  uuid: "12345-67890",
  full_slug: "blog/example-post",
  name: "Example Blog Post",
  published_at: "2024-01-15T10:30:00.000Z",
  content: {
    component: "page_post",
    Heading: "Building Modern Web Applications",
    description:
      "Learn how to create fast, accessible, and maintainable web applications using modern tools and best practices.",
    published_date: "2024-01-15T10:30:00.000Z",
    tags: ["development", "web", "javascript", "react"],
    view_transition_name: "post-12345",
    _uid: "post-content-123",
  },
}
