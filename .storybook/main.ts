import path from 'path';
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"], //👈 Configures the static asset folder in Storybook
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname, ".."), "node_modules"],
        alias: {
          ...config.resolve?.alias,
          "@/components": path.resolve(__dirname, "../components"),
          "@/context": path.resolve(__dirname, "../context"),
          "@/custom-hooks": path.resolve(__dirname, "../custom-hooks"),
          "@/utilities": path.resolve(__dirname, "../utilities"),
        },
      },
    };
  },
};
export default config;
