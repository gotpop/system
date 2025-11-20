import type { Meta, StoryObj } from "@storybook/react"
import { StorybookBackground } from "../../../components/storybook"
import type { LogoDefaultStoryblok } from "../../../types/storyblok-components"
import { GridMaster } from "../../ui/GridMaster/GridMaster"
import { Main } from "../../ui/Main/Main"
import { LogoDefault } from "./LogoDefault"

const meta: Meta<typeof LogoDefault> = {
  title: "Storyblok/LogoDefault",
  component: LogoDefault,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GridMaster>
        <Main>
          <StorybookBackground variant="secondary-700">
            <Story />
          </StorybookBackground>
        </Main>
      </GridMaster>
    ),
  ],
  args: {
    blok: {
      _uid: "12345",
      component: "logo_default",
      link: {
        cached_url: "/",
        linktype: "story",
      },
    } satisfies LogoDefaultStoryblok,
  },
  argTypes: {
    blok: {
      description: "The Storyblok blok data for the logo component",
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
