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
  webpackFinal: async (config) => {
    // Remove SWC loader to fix Next.js 16 compatibility
    if (config.module?.rules) {
      config.module.rules = config.module.rules.filter((rule) => {
        if (typeof rule === "object" && rule && "loader" in rule) {
          return !rule.loader?.toString().includes("next-swc-loader")
        }
        return true
      })
    }
    return config
  },
}

export default config
