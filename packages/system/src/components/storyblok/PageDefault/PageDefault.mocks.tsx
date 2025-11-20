import type {
  HeroDefaultStoryblok,
  PageDefaultStoryblok,
  RichTextBlockStoryblok,
} from "../../../types/storyblok-components"
import { HeroDefault } from "../HeroDefault"
import { RichTextBlock } from "../RichTextBlock"

// Mock content blocks
export const mockHeroBlock: HeroDefaultStoryblok = {
  _uid: "hero-1",
  component: "hero_default",
  heading: "Lorem Ipsum Dolor Sit",
  subheading: {
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
    ],
  },
}

export const mockRichTextBlock: RichTextBlockStoryblok = {
  _uid: "richtext-1",
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
            text: "Duis aute irure",
          },
          {
            type: "text",
            text: " dolor in reprehenderit in voluptate velit esse ",
          },
          {
            type: "text",
            marks: [{ type: "italic" }],
            text: "cillum dolore",
          },
          {
            type: "text",
            text: " eu fugiat nulla pariatur.",
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

export const mockSecondRichTextBlock: RichTextBlockStoryblok = {
  _uid: "richtext-2",
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
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
        ],
      },
    ],
  },
}

// Mock page configurations
export const mockSimplePageBlok: PageDefaultStoryblok = {
  _uid: "page-1",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock, mockRichTextBlock],
}

export const mockContentPageBlok: PageDefaultStoryblok = {
  _uid: "page-2",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock, mockRichTextBlock, mockSecondRichTextBlock],
}

export const mockLandingPageBlok: PageDefaultStoryblok = {
  _uid: "page-3",
  component: "page_default",
  header: "header-1",
  footer: "footer-1",
  body: [mockHeroBlock],
}

// Mock React nodes for simple header/footer
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

// Mock page content blocks
export const mockSimplePageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
    <RichTextBlock blok={mockRichTextBlock} />
  </>
)

export const mockContentPageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
    <RichTextBlock blok={mockRichTextBlock} />
    <RichTextBlock blok={mockSecondRichTextBlock} />
  </>
)

export const mockLandingPageBlocks = (
  <>
    <HeroDefault blok={mockHeroBlock} />
  </>
)
