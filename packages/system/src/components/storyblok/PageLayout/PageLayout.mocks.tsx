import type {
  HeroDefaultStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { HeroDefault } from "../HeroDefault"
import { RichTextBlock } from "../RichTextBlock"

// Mock content blocks for different layout scenarios
export const mockLayoutHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-layout-1",
  component: "hero_default",
  heading: "Lorem Ipsum Dolor",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
        ],
      },
    ],
  },
}

export const mockLayoutContentBlock: RichTextBlockStoryblok = {
  _uid: "content-layout-1",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Duis aute irure dolor",
          },
          {
            type: "text",
            text: " in reprehenderit in voluptate velit esse cillum dolore.",
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

export const mockLayoutSecondContentBlock: RichTextBlockStoryblok = {
  _uid: "content-layout-2",
  component: "rich_text_block",
  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 2 },
        content: [
          {
            type: "text",
            text: "Sed Ut Perspiciatis",
          },
        ],
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Neque porro quisquam",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Ut enim ad minima veniam",
                  },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Quis autem vel eum iure",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

// Mock header and footer components (consistent with other page components)
export const mockSimpleHeader = (
  <header
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "4rem",
    }}
  ></header>
)

export const mockSimpleFooter = (
  <footer
    style={{
      padding: "1rem",
      background: "var(--secondary-700)",
      gridColumn: "1 / -1",
      height: "10rem",
    }}
  ></footer>
)

// Mock content variations for different stories
export const mockMinimalContent = (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </p>
  </div>
)

export const mockRichContent = (
  <>
    <HeroDefault blok={mockLayoutHeroBlock} />
    <RichTextBlock blok={mockLayoutContentBlock} />
  </>
)

export const mockFullContent = (
  <>
    <HeroDefault blok={mockLayoutHeroBlock} />
    <RichTextBlock blok={mockLayoutContentBlock} />
    <RichTextBlock blok={mockLayoutSecondContentBlock} />
  </>
)

export const mockEmptyContent = (
  <div
    style={{
      padding: "4rem",
      textAlign: "center",
      color: "var(--neutral-500)",
    }}
  >
    <p>Nullam quis risus eget urna mollis</p>
  </div>
)
