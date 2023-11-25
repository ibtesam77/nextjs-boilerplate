import type { Meta, StoryObj } from "@storybook/react";

import PageWrapper from "@/components/organisms/page/PageWrapper";
import StoryBookPageDecorator from "@/components/organisms/page/StoryBookPageDecorator";

/**
 * Sample Page
 */
const meta = {
  title: "Pages/Sample",
  component: PageWrapper,
  tags: ["autodocs"],
  decorators: [StoryBookPageDecorator],
} satisfies Meta<typeof PageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sample Page",
    children: "This is a sample page content",
  },
};
