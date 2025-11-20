import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { HeaderDefault } from "./HeaderDefault"
import {
  mockConfig,
  mockHeaderBlok,
  mockLogoNode,
  mockNavNode,
} from "./HeaderDefault.mocks"

const meta: Meta<typeof HeaderDefault> = {
  title: "Storyblok/HeaderDefault",
  component: HeaderDefault,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <Story />
      </GridMaster>
    ),
  ],
  args: {
    blok: mockHeaderBlok,
    nav: mockNavNode,
    logo: mockLogoNode,
    config: mockConfig,
  },
  argTypes: {
    blok: {
      description: "Storyblok header component data",
      control: "object",
    },
    nav: {
      description: "Navigation React node",
      control: false,
    },
    logo: {
      description: "Logo React node",
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
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile2" },
  },
}
