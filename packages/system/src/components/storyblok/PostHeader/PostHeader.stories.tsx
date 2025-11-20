import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster"
import { PostHeader } from "./PostHeader"
import { mockBlogPost } from "./PostHeader.mocks"

const meta: Meta<typeof PostHeader> = {
  title: "Storyblok/PostHeader",
  component: PostHeader,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <GridMaster>
        <main>
          <Story />
        </main>
      </GridMaster>
    ),
  ],
  argTypes: {
    heading: { control: "text" },
    publishedDate: { control: "text" },
    style: { control: "object" },
  },
  tags: ["autodocs"],
  args: mockBlogPost,
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
