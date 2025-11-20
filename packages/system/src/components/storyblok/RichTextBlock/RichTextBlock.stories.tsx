import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster"
import { RichTextBlock } from "./RichTextBlock"
import { mockBasicRichTextBlok } from "./RichTextBlock.mocks"

const meta: Meta<typeof RichTextBlock> = {
  title: "Storyblok/RichTextBlock",
  component: RichTextBlock,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    blok: mockBasicRichTextBlok,
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
