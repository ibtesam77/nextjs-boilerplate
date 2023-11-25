import type { Meta, StoryObj } from '@storybook/react';

import Cross from '@/components/atoms/icons/Cross';

/**
 * Cross icon
*/
const meta = {
  title: 'Atoms/Icons/Cross',
  component: Cross,
  tags: ['autodocs'],
} satisfies Meta<typeof Cross>;

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
