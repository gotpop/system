import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../../ui/CustomElement"
import { GridMaster } from "../../ui/GridMaster"
import { Typography } from "./Typography"
import {
  sampleDateText,
  sampleHeadingText,
  sampleLongText,
  sampleNumbers,
  sampleShortText,
  sampleSmallText,
  sampleSubheadingText,
  sampleText,
} from "./Typography.mocks"

const meta: Meta<typeof Typography> = {
  title: "Storyblok/Typography",
  component: Typography,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
  argTypes: {
    children: { control: "text" },
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small", "time"],
    },
    shade: {
      control: "select",
      options: ["light", "dark", "charcoal", "dimmed"],
    },
    variant: {
      control: "select",
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-md",
        "text-lg",
        "text-xl",
        "text-xxl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
        "text-6xl",
        "text-7xl",
        "text-8xl",
        "text-9xl",
        "hero",
      ],
    },
    weight: {
      control: "select",
      options: [
        "weight-thin",
        "weight-light",
        "weight-regular",
        "weight-medium",
        "weight-semibold",
        "weight-bold",
        "weight-black",
      ],
    },
    style: {
      control: "select",
      options: ["style-normal", "style-italic"],
    },
    className: { control: "text" },
    id: { control: "text" },
    dateTime: { control: "text" },
  },
  args: {
    children: sampleText,
    tag: "p",
    shade: "light",
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

export const Hero: Story = {
  args: {
    children: sampleHeadingText,
    tag: "h1",
    variant: "hero",
    shade: "dark",
  },
}

export const Heading1: Story = {
  args: {
    children: sampleHeadingText,
    tag: "h1",
    variant: "text-6xl",
    shade: "dark",
  },
}

export const Heading2: Story = {
  args: {
    children: sampleSubheadingText,
    tag: "h2",
    variant: "text-4xl",
    shade: "dark",
  },
}

export const Heading3: Story = {
  args: {
    children: "Section Heading",
    tag: "h3",
    variant: "text-2xl",
    shade: "dark",
  },
}

export const Heading4: Story = {
  args: {
    children: "Subsection Heading",
    tag: "h4",
    variant: "text-xl",
    shade: "dark",
  },
}

export const TextSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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

export const ColorShades: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography tag="p" variant="text-lg" shade="light">
        Light shade: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-lg" shade="dark">
        Dark shade: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-lg" shade="charcoal">
        Charcoal shade: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-lg" shade="dimmed">
        Dimmed shade: {sampleText}
      </Typography>
    </div>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography tag="p" variant="text-lg" weight="weight-thin" shade="dark">
        Thin: {sampleShortText}
      </Typography>
      <Typography tag="p" variant="text-lg" weight="weight-light" shade="dark">
        Light: {sampleShortText}
      </Typography>
      <Typography
        tag="p"
        variant="text-lg"
        weight="weight-regular"
        shade="dark"
      >
        Regular: {sampleShortText}
      </Typography>
      <Typography tag="p" variant="text-lg" weight="weight-medium" shade="dark">
        Medium: {sampleShortText}
      </Typography>
      <Typography
        tag="p"
        variant="text-lg"
        weight="weight-semibold"
        shade="dark"
      >
        Semibold: {sampleShortText}
      </Typography>
      <Typography tag="p" variant="text-lg" weight="weight-bold" shade="dark">
        Bold: {sampleShortText}
      </Typography>
      <Typography tag="p" variant="text-lg" weight="weight-black" shade="dark">
        Black: {sampleShortText}
      </Typography>
    </div>
  ),
}

export const FontStyles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography tag="p" variant="text-lg" style="style-normal" shade="dark">
        Normal: {sampleText}
      </Typography>
      <Typography tag="p" variant="text-lg" style="style-italic" shade="dark">
        Italic: {sampleText}
      </Typography>
    </div>
  ),
}

export const TimeElement: Story = {
  args: {
    children: sampleDateText,
    tag: "time",
    variant: "text-sm",
    shade: "charcoal",
    dateTime: "2024-11-15T10:30:00.000Z",
  },
}

export const SmallText: Story = {
  args: {
    children: sampleSmallText,
    tag: "small",
    variant: "text-xs",
    shade: "dimmed",
  },
}

export const ShortContent: Story = {
  args: {
    children: sampleShortText,
    tag: "p",
    variant: "text-lg",
    shade: "dark",
  },
}

export const LongContent: Story = {
  args: {
    children: sampleLongText,
    tag: "p",
    variant: "text-base",
    shade: "charcoal",
  },
}

export const NumbersAndText: Story = {
  args: {
    children: sampleNumbers,
    tag: "p",
    variant: "text-base",
    shade: "dark",
  },
}

export const WithId: Story = {
  args: {
    children: sampleHeadingText,
    tag: "h2",
    variant: "text-2xl",
    shade: "dark",
    id: "custom-heading-id",
  },
}

export const Tablet: Story = {
  args: {
    children: sampleLongText,
    tag: "p",
    variant: "text-base",
    shade: "charcoal",
  },
  globals: {
    viewport: { value: "tablet" },
  },
}

export const Mobile: Story = {
  args: {
    children: sampleLongText,
    tag: "p",
    variant: "text-base",
    shade: "charcoal",
  },
  globals: {
    viewport: { value: "mobile2" },
  },
}
