import type { Meta, StoryObj } from '@storybook/react';

import Hamburger from '@/components/atoms/icons/Hamburger';

/**
 * Hamburger icon
*/
const meta = {
  title: 'Atoms/Icons/Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    color: 'red',
    size: '20px',
  },
};

export const Small: Story = {
  args: {
    color: 'green',
    size: '12px',
  },
};

export const Large: Story = {
  args: {
    color: 'yellow',
    size: '28px',
  },
};
