import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../../ui/CustomElement"
import { GridMaster } from "../../ui/GridMaster"
import { Typography } from "./Typography"
import { sampleText } from "./Typography.mocks"

const meta: Meta<typeof Typography> = {
  title: "Storyblok/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    children: sampleText,
    tag: "p",
    shade: "charcoal",
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

export const Default: Story = {
  render: () => (
    <div>
      <Typography tag="p" variant="text-xs" shade="charcoal">
        text-xs: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-sm" shade="charcoal">
        text-sm: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-base" shade="charcoal">
        text-base: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-md" shade="charcoal">
        text-md: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-lg" shade="charcoal">
        text-lg: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-xl" shade="charcoal">
        text-xl: {sampleText}
      </Typography>
    </div>
  ),
}

export const Headings: Story = {
  render: () => (
    <div>
      <Typography tag="h1" variant="hero" shade="dark">
        H1: Main Heading
      </Typography>
      <Typography tag="h2" variant="text-4xl" shade="dark">
        H2: Section Heading
      </Typography>
      <Typography tag="h3" variant="text-3xl" shade="dark">
        H3: Section Heading
      </Typography>
      <Typography tag="h4" variant="text-2xl" shade="dark">
        H4: Subsection Heading
      </Typography>
      <Typography tag="h5" variant="text-xl" shade="dark">
        H5: Minor Heading
      </Typography>
      <Typography tag="h6" variant="text-lg" shade="dark">
        H6: Small Heading
      </Typography>
    </div>
  ),
}
