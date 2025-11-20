import type { Meta, StoryObj } from "@storybook/react"
import { AVAILABLE_ICONS, Icon } from "./Icon"

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Icon component for displaying Font Awesome and other icon libraries. Uses a registry system for tree-shaking optimization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Icon name from the registry",
      control: "select",
      options: AVAILABLE_ICONS,
    },
    size: {
      description: "Icon size in pixels",
      control: { type: "range", min: 12, max: 64, step: 4 },
    },
    color: {
      description: "Icon color (CSS color value)",
      control: "color",
    },
    className: {
      description: "Optional CSS class name",
      control: "text",
    },
  },
  args: {
    name: "FaHome",
    size: 24,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = {
  args: {
    name: "FaStar",
    size: 48,
    color: "#f59e0b",
  },
}

export const Small: Story = {
  args: {
    name: "FaUser",
    size: 16,
    color: "#6b7280",
  },
}

export const Navigation: Story = {
  args: {
    name: "FaBars",
    size: 24,
    color: "#374151",
  },
}

export const Social: Story = {
  args: {
    name: "FaSquareGithub",
    size: 32,
    color: "#1f2937",
  },
}

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
        maxWidth: "800px",
      }}
    >
      {AVAILABLE_ICONS.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0.75rem",
            border: "1px solid #e5e7eb",
            borderRadius: "0.375rem",
            textAlign: "center",
          }}
        >
          <Icon name={iconName} size={24} />
          <span
            style={{
              fontSize: "0.75rem",
              marginTop: "0.5rem",
              color: "#6b7280",
            }}
          >
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All available icons in the registry. Add new icons to ICON_REGISTRY in Icon.tsx.",
      },
    },
  },
}
