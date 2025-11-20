import type { Meta, StoryObj } from "@storybook/react"
import { PagePost } from "./PagePost"
import { mockBlogPostBlocks, mockBlogPostBlok } from "./PagePost.mocks"

const meta: Meta<typeof PagePost> = {
  title: "Storyblok/PagePost",
  component: PagePost,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    header: { control: false },
    footer: { control: false },
    blocks: { control: false },
    blok: { control: "object" },
  },
  args: {
    blok: mockBlogPostBlok,
    blocks: mockBlogPostBlocks,
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tablet: Story = {
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile2" },
  },
}
