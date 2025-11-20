import type { Meta, StoryObj } from "@storybook/react"
import { SnippetBlock } from "./SnippetBlock"
import {
  mockEmptySnippetBlok,
  mockInvalidSnippetBlok,
  mockNoSnippetBlok,
  mockTextAlignASnippetBlok,
  mockTextAlignBSnippetBlok,
  mockUnknownSnippetBlok,
} from "./SnippetBlock.mocks"

const meta: Meta<typeof SnippetBlock> = {
  title: "Storyblok/SnippetBlock",
  component: SnippetBlock,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    blok: { control: "object" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const TextAlignA: Story = {
  args: {
    blok: mockTextAlignASnippetBlok,
  },
}

export const TextAlignB: Story = {
  args: {
    blok: mockTextAlignBSnippetBlok,
  },
}

export const UnknownSnippet: Story = {
  args: {
    blok: mockUnknownSnippetBlok,
  },
}

export const InvalidSnippet: Story = {
  args: {
    blok: mockInvalidSnippetBlok,
  },
}

export const EmptySnippet: Story = {
  args: {
    blok: mockEmptySnippetBlok,
  },
}

export const NoSnippet: Story = {
  args: {
    blok: mockNoSnippetBlok,
  },
}

export const TabletView: Story = {
  args: {
    blok: mockTextAlignBSnippetBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    blok: mockTextAlignBSnippetBlok,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
