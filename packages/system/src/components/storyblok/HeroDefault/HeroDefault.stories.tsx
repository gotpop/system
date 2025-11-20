import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui"
import { HeroDefault } from "./HeroDefault"
import { mockFullHeroBlok } from "./HeroDefault.mocks"

const meta: Meta<typeof HeroDefault> = {
  title: "Storyblok/HeroDefault",
  component: HeroDefault,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    blok: { control: "object" },
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

export const Default: Story = {
  args: {
    blok: mockFullHeroBlok,
  },
}

export const Tablet: Story = {
  args: {
    blok: mockFullHeroBlok,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  args: {
    blok: mockFullHeroBlok,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}
