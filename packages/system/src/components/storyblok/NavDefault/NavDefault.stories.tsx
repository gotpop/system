import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { NavDefault } from "./NavDefault"
import {
  mockConfig,
  mockIconNavBlocks,
  mockIconNavBlok,
  mockMainNavBlocks,
  mockMainNavBlok,
  mockSimpleNavBlocks,
  mockSimpleNavBlok,
} from "./NavDefault.mocks"

const meta: Meta<typeof NavDefault> = {
  title: "Storyblok/NavDefault",
  component: NavDefault,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <header
          style={{
            gridColumn: "content",
          }}
        >
          <Story />
        </header>
      </GridMaster>
    ),
  ],
  args: {
    blok: mockMainNavBlok,
    blocks: mockMainNavBlocks,
    config: mockConfig,
  },
  argTypes: {
    blok: {
      description: "Storyblok navigation component data",
      control: "object",
    },
    blocks: {
      description: "Navigation item React nodes",
      control: false,
    },
    config: {
      description: "Storyblok configuration object",
      control: "object",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tablet: Story = {
  args: {
    blok: mockIconNavBlok,
    blocks: mockIconNavBlocks,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockSimpleNavBlok,
    blocks: mockSimpleNavBlocks,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
