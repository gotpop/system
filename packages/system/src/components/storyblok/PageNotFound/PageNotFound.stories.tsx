import type { Meta, StoryObj } from "@storybook/react"
import { PageNotFound } from "./PageNotFound"
import {
  mockAvailableStories,
  mockNotFoundBlok,
  notFoundContentBlocks,
} from "./PageNotFound.mocks"

const meta: Meta<typeof PageNotFound> = {
  title: "Storyblok/PageNotFound",
  component: PageNotFound,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    header: { control: false },
    footer: { control: false },
    blocks: { control: false },
    blok: { control: "object" },
    availableStories: { control: "object" },
  },
  args: {
    blok: mockNotFoundBlok,
    blocks: notFoundContentBlocks,
    availableStories: mockAvailableStories,
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
