import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../../ui/CustomElement"
import { GridMaster } from "../../ui/GridMaster"
import { SnippetBlock } from "./SnippetBlock"
import {
  mockTextAlignASnippetBlok,
  mockTextAlignBSnippetBlok,
} from "./SnippetBlock.mocks"

const meta: Meta<typeof SnippetBlock> = {
  title: "Storyblok/SnippetBlock",
  component: SnippetBlock,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    blok: { control: "object" },
  },
  args: {
    blok: mockTextAlignASnippetBlok,
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <main>
          <CustomElement tag="box-grid">
            <Story />
          </CustomElement>
        </main>
      </GridMaster>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TextAlignB: Story = {
  args: {
    blok: mockTextAlignBSnippetBlok,
  },
}

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
