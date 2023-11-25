import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/atoms/elements/Button';

/**
 * Button Element
*/
const meta = {
  title: 'Atoms/Elements/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Transparent: Story = {
  args: {
    color: 'transparent',
    children: 'Transparent',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
};

export const Active: Story = {
  args: {
    active: true,
    children: 'Active',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading...',
  },
};
