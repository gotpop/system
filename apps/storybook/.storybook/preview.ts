import type { Preview } from "@storybook/nextjs"
import "../globals.css"

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    backgrounds: { disable: true },
    grid: { disable: true },
  },
}

export default preview
