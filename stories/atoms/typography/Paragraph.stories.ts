import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "@/components/atoms/typography/Paragraph";

const LOREM_IPSUM_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

/**
 * Paragraph replacing "p" tag
 */
const meta = {
  title: "Atoms/Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpperCase: Story = {
  args: {
    children: "This is uppercase",
    className: "text-blue-300 uppercase",
  },
};

export const CenterAlign: Story = {
  args: {
    children: LOREM_IPSUM_TEXT,
    className: "text-blue-300 text-center",
  },
};

export const Underline: Story = {
  args: {
    ...CenterAlign.args,
    className: "text-blue-300 underline underline-offset-4",
  },
};

export const Truncate: Story = {
  args: {
    ...CenterAlign.args,
    className: "text-blue-300 truncate",
  },
};

export const Indent: Story = {
  args: {
    ...CenterAlign.args,
    className: "text-blue-300 indent-40",
  },
};
