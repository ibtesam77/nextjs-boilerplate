import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@/components/organisms/layout/Navbar";
import { storyBookNavbarArgs } from "@/utilities/common/constants";

/**
 * Global layout navbar
 */
const meta = {
  title: "Organisms/Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: storyBookNavbarArgs,
};
