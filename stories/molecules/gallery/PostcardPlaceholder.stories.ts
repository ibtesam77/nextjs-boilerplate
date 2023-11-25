import type { Meta, StoryObj } from '@storybook/react';

import PostCardPlaceholder from '@/components/molecules/gallery/PostCardPlaceholder';

/**
 * Gallery postcard placeholder
*/
const meta = {
  title: 'Molecules/Gallery/PostCardPlaceholder',
  component: PostCardPlaceholder,
  tags: ['autodocs'],
} satisfies Meta<typeof PostCardPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
