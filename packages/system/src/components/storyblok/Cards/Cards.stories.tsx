import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { Cards } from "./Cards"
import {
  createMockBlocks,
  mockCardsBlok,
  mockConfig,
  mockPosts,
  mockTags,
} from "./Cards.mocks"

const meta: Meta<typeof Cards> = {
  title: "Storyblok/Cards",
  component: Cards,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A cards container component that displays a grid of blog posts with optional client-side filtering.",
      },
    },
  },
  tags: ["autodocs"],
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
    blok: {
      description: "Cards component configuration",
      control: "object",
    },
    posts: {
      description: "Array of blog posts to display",
      control: "object",
    },
    availableTags: {
      description: "Available tags for filtering",
      control: "object",
    },
    config: {
      description: "Configuration object with root namespace settings",
      control: "object",
    },
    blocks: {
      description: "Pre-rendered card components (for static mode)",
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blok: mockCardsBlok,
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
    blocks: createMockBlocks(mockPosts, mockConfig),
  },
}

export const Tablet: Story = {
  args: {
    blok: mockCardsBlok,
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
    blocks: createMockBlocks(mockPosts, mockConfig),
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockCardsBlok,
    posts: mockPosts,
    availableTags: mockTags,
    config: mockConfig,
    blocks: createMockBlocks(mockPosts, mockConfig),
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
