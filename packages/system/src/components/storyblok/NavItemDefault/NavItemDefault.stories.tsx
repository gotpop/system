import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { NavItemDefault } from "./NavItemDefault"
import {
  mockConfig,
  mockExternalNavItem,
  mockIconTextNavItem,
  mockTextOnlyNavItem,
} from "./NavItemDefault.mocks"

const meta: Meta<typeof NavItemDefault> = {
  title: "Storyblok/NavItemDefault",
  component: NavItemDefault,
  parameters: {
    layout: "fullscreen",
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
  args: {
    blok: mockTextOnlyNavItem,
    config: mockConfig,
    style: { "--grid-column": "content-start / span 1" } as React.CSSProperties,
  },
  argTypes: {
    blok: {
      description: "Storyblok navigation item component data",
      control: "object",
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

export const IconAndText: Story = {
  args: {
    blok: mockIconTextNavItem,
  },
}

export const ExternalLink: Story = {
  args: {
    blok: mockExternalNavItem,
  },
}

export const Tablet: Story = {
  args: {
    blok: mockIconTextNavItem,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockIconTextNavItem,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
