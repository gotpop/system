import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { NavItemDefault } from "./NavItemDefault"
import {
  mockConfig,
  mockExternalNavItem,
  mockIconOnlyNavItem,
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
        <nav
          style={{
            padding: "2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Story />
        </nav>
      </GridMaster>
    ),
  ],
  args: {
    blok: mockTextOnlyNavItem,
    config: mockConfig,
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
    blok: mockIconOnlyNavItem,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}

export const TextOnly: Story = {
  args: {
    blok: mockTextOnlyNavItem,
  },
}

export const IconOnly: Story = {
  args: {
    blok: mockIconOnlyNavItem,
  },
}

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
