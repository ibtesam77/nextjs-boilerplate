import type { Meta, StoryObj } from "@storybook/react";

import PostCardDetails from "@/components/organisms/gallery/PostCardDetails";
import { PostCard } from "@/types/gallery";
import postCardsData from "@/utilities/gallery/postcards";

/**
 * Postcard details
 */
const meta = {
  title: "Organisms/Gallery/PostcardDetails",
  component: PostCardDetails,
  tags: ["autodocs"],
} satisfies Meta<typeof PostCardDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const postcardData: PostCard = postCardsData[0];

export const Default: Story = {
  args: {
    item: postcardData,
  },
};
