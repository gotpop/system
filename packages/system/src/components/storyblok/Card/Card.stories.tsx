import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"
import {
  baseMockPost,
  mockConfig
} from "./Card.mocks"

const meta: Meta<typeof Card> = {
  title: "Storyblok/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying blog post previews with metadata, title, description, and tags.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    blok: {
      description: "Post data including content and metadata",
      control: "object",
    },
    config: {
      description: "Configuration object with root namespace settings",
      control: "object",
    },
  },
  args: {
    config: mockConfig,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blok: baseMockPost,
  },
}

export const Tablet: Story = {
  args: {
    blok: baseMockPost,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    blok: baseMockPost,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
