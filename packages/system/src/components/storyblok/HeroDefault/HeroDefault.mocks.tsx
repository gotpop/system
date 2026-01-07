import type { HeroDefaultStoryblok } from "./HeroDefault"

// Main hero mock data
export const mockFullHeroBlok: HeroDefaultStoryblok = {
  _uid: "hero-full-1",
  component: "hero_default",
  heading: "Lorem Ipsum Dolor Sit Amet",
  subheading: {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          },
          {
            type: "text",
            marks: [{ type: "bold" }],
            text: "Ut enim ad minim veniam",
          },
          {
            type: "text",
            text: " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        ],
      },
    ],
  },
}
