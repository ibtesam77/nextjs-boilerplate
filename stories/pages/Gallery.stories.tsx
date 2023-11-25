import type { Meta, StoryObj } from "@storybook/react";

import GalleryStoryBookPage from "@/components/organisms/gallery/GalleryStoryBookPage";
import StoryBookPageDecorator from "@/components/organisms/page/StoryBookPageDecorator";

/**
 * Gallery page
 */
const meta = {
  title: "Pages/Gallery",
  component: GalleryStoryBookPage,
  tags: ["autodocs"],
  decorators: [StoryBookPageDecorator],
} satisfies Meta<typeof GalleryStoryBookPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  args: {
    title: "Gallery",
    children: null,
  },
};
