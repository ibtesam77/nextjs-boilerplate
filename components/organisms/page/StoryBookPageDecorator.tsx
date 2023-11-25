import { StoryFn } from "@storybook/react";
import Navbar from "../layout/Navbar";
import { storyBookNavbarArgs } from "@/utilities/common/constants";

export default function StoryBookPageDecorator(Story: StoryFn) {
  return (
    <>
      <Navbar {...storyBookNavbarArgs} />
      <Story />
    </>
  );
}
