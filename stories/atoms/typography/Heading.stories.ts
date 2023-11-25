import type { Meta, StoryObj } from "@storybook/react";

import Heading from "@/components/atoms/typography/Heading";

/**
 * Heading replacing "h1,h2,h3,h4,h5,h6" tags
 */
const meta = {
  title: "Atoms/Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
    className: "text-blue-300",
  },
};

export const H2: Story = {
  args: {
    ...H1.args,
    variant: "h2",
    children: "Heading 2",
  },
};

export const H3: Story = {
  args: {
    ...H1.args,
    variant: "h3",
    children: "Heading 3",
  },
};

export const H4: Story = {
  args: {
    ...H1.args,
    variant: "h4",
    children: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    ...H1.args,
    variant: "h5",
    children: "Heading 5",
  },
};

export const H6: Story = {
  args: {
    ...H1.args,
    variant: "h6",
    children: "Heading 6",
  },
};
