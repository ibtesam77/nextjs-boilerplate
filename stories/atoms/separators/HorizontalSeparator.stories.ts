import type { Meta, StoryObj } from '@storybook/react';

import HorizontalSeparator from '@/components/atoms/separators/HorizontalSeparator';

/**
 * Horizontal separator
*/
const meta = {
  title: 'Atoms/Separators/HorizontalSeparator',
  component: HorizontalSeparator,
  tags: ['autodocs'],
} satisfies Meta<typeof HorizontalSeparator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const Thin: Story = {
  args: {
    color: 'green',
    thickness: 0.5
  },
};

export const Thick: Story = {
  args: {
    color: 'yellow',
    thickness: 5
  },
};
