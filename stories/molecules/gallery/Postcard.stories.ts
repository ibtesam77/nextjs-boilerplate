import type { Meta, StoryObj } from "@storybook/react";

import Postcard from "@/components/molecules/gallery/PostCard";
import { PostCard } from "@/types/gallery";
import postCardsData from "@/utilities/gallery/postcards";

/**
 * Gallery postcard
 */
const meta = {
  title: "Molecules/Gallery/Postcard",
  component: Postcard,
  tags: ["autodocs"],
} satisfies Meta<typeof Postcard>;

const postcardData: PostCard = postCardsData[0];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postCard: postcardData,
  },
};
