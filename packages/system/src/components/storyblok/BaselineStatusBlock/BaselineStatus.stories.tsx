import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../../ui"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { BaselineStatus } from "./BaselineStatus"
import {
  limitedAvailabilityFeature,
  newlyAvailableFeature,
  widelyAvailableFeature,
} from "./BaselineStatus.mocks"

const meta: Meta<typeof BaselineStatus> = {
  title: "Storyblok/BaselineStatus",
  component: BaselineStatus,
  parameters: {
    layout: "fullscreen",
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
  args: {
    data: widelyAvailableFeature,
  },
}

export const NewlyAvailable: Story = {
  args: {
    data: newlyAvailableFeature,
  },
}

export const LimitedSupport: Story = {
  args: {
    data: limitedAvailabilityFeature,
  },
}

export const Tablet: Story = {
  args: {
    data: widelyAvailableFeature,
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    data: widelyAvailableFeature,
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
