import type { Meta, StoryObj } from "@storybook/react"
import { PageDefault } from "./PageDefault"
import {
  mockContentPageBlocks,
  mockContentPageBlok,
  mockLandingPageBlocks,
  mockLandingPageBlok,
  mockSimpleFooter,
  mockSimpleHeader,
  mockSimplePageBlocks,
  mockSimplePageBlok,
} from "./PageDefault.mocks"

const meta: Meta<typeof PageDefault> = {
  title: "Storyblok/PageDefault",
  component: PageDefault,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    blok: mockSimplePageBlok,
    header: mockSimpleHeader,
    footer: mockSimpleFooter,
    blocks: mockSimplePageBlocks,
  },
  argTypes: {
    blok: {
      description: "Storyblok page component data",
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
      description: "Page content blocks React nodes",
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tablet: Story = {
  args: {
    blok: mockContentPageBlok,
    blocks: mockContentPageBlocks,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockLandingPageBlok,
    blocks: mockLandingPageBlocks,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
