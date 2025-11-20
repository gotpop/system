import type { Meta, StoryObj } from "@storybook/react"
import { Typography } from "./Typography"
import {
  sampleAccents,
  sampleBodyText,
  sampleCodeText,
  sampleDateText,
  sampleEmoji,
  sampleHeadingText,
  sampleLongText,
  sampleMinimal,
  sampleNumbers,
  sampleShortText,
  sampleSmallText,
  sampleSpecialChars,
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
}

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {
    children: sampleText,
    tag: "p",
  },
}

export const Hero: Story = {
  args: {
    children: sampleHeadingText,
    tag: "h1",
    variant: "hero",
    shade: "dark",
  },
}

// Heading hierarchy
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

// Text sizes
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

// Color shades
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

// Font weights
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

// Font styles
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

// Special elements
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

// Content variations
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

export const SpecialCharacters: Story = {
  args: {
    children: sampleSpecialChars,
    tag: "p",
    variant: "text-base",
    shade: "dark",
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

export const EmojiContent: Story = {
  args: {
    children: sampleEmoji,
    tag: "p",
    variant: "text-lg",
    shade: "dark",
  },
}

export const CodeText: Story = {
  args: {
    children: sampleCodeText,
    tag: "p",
    variant: "text-sm",
    shade: "dark",
    className: "font-mono",
  },
}

export const AccentedText: Story = {
  args: {
    children: sampleAccents,
    tag: "p",
    variant: "text-base",
    shade: "dark",
  },
}

export const MinimalContent: Story = {
  args: {
    children: sampleMinimal,
    tag: "p",
    variant: "text-lg",
    shade: "dark",
  },
}

// Custom styling
export const WithCustomClass: Story = {
  args: {
    children: sampleBodyText,
    tag: "p",
    variant: "text-base",
    shade: "dark",
    className: "custom-spacing",
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

// Responsive testing
export const TabletView: Story = {
  args: {
    children: sampleLongText,
    tag: "p",
    variant: "text-base",
    shade: "charcoal",
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
}

export const MobileView: Story = {
  args: {
    children: sampleHeadingText,
    tag: "h1",
    variant: "hero",
    shade: "dark",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
}
