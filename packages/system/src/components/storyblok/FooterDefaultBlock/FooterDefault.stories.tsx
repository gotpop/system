import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { FooterDefault } from "./FooterDefault"
import { mockFooterBlok } from "./FooterDefault.mocks"

const meta = {
  title: "Storyblok/FooterDefault",
  component: FooterDefault,
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
} satisfies Meta<typeof FooterDefault>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blok: mockFooterBlok,
  },
}

export const Tablet: Story = {
  args: {
    blok: mockFooterBlok,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockFooterBlok,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
