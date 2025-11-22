import type { Meta, StoryObj } from "@storybook/react"
import { CustomElement } from "../CustomElement"
import { GridMaster } from "../GridMaster/GridMaster"
import { AVAILABLE_ICONS, Icon } from "./Icon"

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Icon component for displaying Font Awesome and other icon libraries. Uses a registry system for tree-shaking optimization.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    name: "FaHome",
    size: 24,
  },
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 8rem",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {AVAILABLE_ICONS.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            textAlign: "center",
            justifyContent: "center",
            height: "8rem",
            gap: "1rem",
          }}
        >
          <Icon name={iconName} size={24} />
          <span
            style={{
              fontSize: "0.75rem",
              marginTop: "1rem",
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
