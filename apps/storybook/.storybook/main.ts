import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../../../packages/system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: false,
      },
    },
  },
  features: {
    experimentalRSC: true,
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
  staticDirs: ["../public"],
}

export default config
