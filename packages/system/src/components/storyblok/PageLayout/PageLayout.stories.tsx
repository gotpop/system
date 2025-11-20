import type { Meta, StoryObj } from "@storybook/react"
import { PageLayout } from "./PageLayout"
import {
  mockRichContent,
  mockSimpleFooter,
  mockSimpleHeader,
} from "./PageLayout.mocks"

const meta: Meta<typeof PageLayout> = {
  title: "Storyblok/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    header: mockSimpleHeader,
    footer: mockSimpleFooter,
    children: mockRichContent,
  },
  argTypes: {
    header: {
      description: "Header React node",
      control: false,
    },
    footer: {
      description: "Footer React node",
      control: false,
    },
    children: {
      description: "Main content React nodes",
      control: false,
    },
    className: {
      description: "Optional CSS class name",
      control: "text",
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
