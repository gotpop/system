import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../../ui"
import { GridMaster } from "../../ui/GridMaster"
import { RichTextCodeBlock } from "./RichTextCodeBlock"
import { mockJavaScriptCodeBlok } from "./RichTextCodeBlock.mocks"

const meta: Meta<typeof RichTextCodeBlock> = {
  title: "Storyblok/RichTextCodeBlock",
  component: RichTextCodeBlock,
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
    blok: mockJavaScriptCodeBlok,
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
