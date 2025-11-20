import type { Meta, StoryObj } from "@storybook/react"
import { PageFilter } from "./PageFilter"
import {
  mockFilterPageBlocks,
  mockFilterPageBlok,
  mockSimpleFooter,
  mockSimpleHeader,
} from "./PageFilter.mocks"

const meta: Meta<typeof PageFilter> = {
  title: "Storyblok/PageFilter",
  component: PageFilter,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    blok: mockFilterPageBlok,
    header: mockSimpleHeader,
    footer: mockSimpleFooter,
    blocks: mockFilterPageBlocks,
  },
  argTypes: {
    blok: {
      description: "Storyblok page filter component data",
      control: "object",
    },
    header: {
      description: "Header React node",
      control: false,
    },
    footer: {
      description: "Footer React node",
      control: false,
    },
    blocks: {
      description: "Page content blocks with filtering capabilities",
      control: false,
    },
  },
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
