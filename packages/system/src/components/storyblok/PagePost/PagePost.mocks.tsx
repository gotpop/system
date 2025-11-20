import type {
  PagePostStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { RichTextBlock } from "../RichTextBlock/RichTextBlock"

export const mockBlogPostContent: RichTextBlockStoryblok = {
  _uid: "post-content-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
        ],
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Ut Enim Ad Minim Veniam",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Duis aute irure dolor",
          },
          {
            type: "text",
            text: " in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ],
      },
    ],
  },
}

export const mockBlogPostBlok: PagePostStoryblok = {
  _uid: "post-1",
  component: "page_post",
  heading: "Lorem Ipsum Dolor Sit Amet",
  published_date: "2024-11-15T10:30:00.000Z",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  tags: ["lorem", "ipsum", "dolor"],
  view_transition_name: "post-transition",
}

export const mockBlogPostBlocks = <RichTextBlock blok={mockBlogPostContent} />
