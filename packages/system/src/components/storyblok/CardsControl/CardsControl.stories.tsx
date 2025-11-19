import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { CardsControl } from "./CardsControl"
import { categoryOptions, sortOptions, tagOptions } from "./CardsControl.mocks"

const meta: Meta<typeof CardsControl> = {
  title: "Storyblok/CardsControl",
  component: CardsControl,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <GridMaster>
        <main>
          <Story />
        </main>
      </GridMaster>
    ),
  ],
  args: {
    onChange: (value: string) => {
      console.log("CardsControl value changed:", value)
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Sort",
    value: "published_desc",
    options: sortOptions,
  },
}

export const Tablet: Story = {
  args: {
    label: "Filter by Tag",
    value: "react",
    options: tagOptions,
    style: { "--grid-column": "span 3" } as React.CSSProperties,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    label: "Category",
    value: "tutorials",
    options: categoryOptions,
    style: { "--grid-column": "1 / -1" } as React.CSSProperties,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
