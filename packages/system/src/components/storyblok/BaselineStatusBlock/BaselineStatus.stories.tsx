import type { Meta, StoryObj } from "@storybook/react"
import { GridMaster } from "../../ui/GridMaster/GridMaster"

import { BaselineStatus } from "./BaselineStatus"
import {
  limitedAvailabilityFeature,
  newlyAvailableFeature,
  noDataFeature,
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
          <Story />
        </main>
      </GridMaster>
    ),
  ],
  argTypes: {
    data: {
      description: "Baseline status data for a web feature",
      control: "object",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "Widely Available????",
  args: {
    data: widelyAvailableFeature,
  },
}

export const Tablet: Story = {
  name: "Newly Available (Tablet)",
  args: {
    data: newlyAvailableFeature,
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
}

export const Mobile: Story = {
  name: "Limited Support (Mobile)",
  args: {
    data: limitedAvailabilityFeature,
  },
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
}

export const NewlyAvailable: Story = {
  name: "Newly Available",
  args: {
    data: newlyAvailableFeature,
  },
}

export const NoData: Story = {
  name: "No Data Available",
  args: {
    data: noDataFeature,
  },
}
