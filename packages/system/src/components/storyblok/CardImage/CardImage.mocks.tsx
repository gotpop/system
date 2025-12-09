import type { CardImageBlokProps } from "../CardImage"

export const mockConfig = {
  component: "Config" as const,
  app_name: "GotPop Blog",
  root_name_space: "blog",
  primary_content_name_space: "blog",
  _uid: "config-123",
}

export const baseMockPost: CardImageBlokProps = {
  _uid: "12345-67890",
  full_slug: "blog/example-post",
  component: "card_image",
  meta_data_page: [
    {
      component: "meta_title",
      _uid: "title-123",
      payload: "Building Modern Web Applications",
    },
    {
      component: "meta_description",
      _uid: "desc-123",
      payload:
        "Learn how to create fast, accessible, and maintainable web applications using modern tools and best practices.",
    },
    {
      component: "meta_date_published",
      _uid: "date-123",
      payload: "2024-01-15T10:30:00.000Z",
    },
    {
      component: "meta_tags",
      _uid: "tags-123",
      payload: ["development", "web", "javascript", "react"],
    },
    {
      component: "meta_view_transition",
      _uid: "transition-123",
      payload: "post-12345",
    },
  ],
}
