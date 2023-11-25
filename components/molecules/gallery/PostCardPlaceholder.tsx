import React from "react";
import PostCardWrapper from "./PostCardWrapper";

export default function PostCardPlaceholder() {
  return (
    <PostCardWrapper>
      <div className="h-full w-full relative overflow-hidden bg-gray-200 placeholder pb-[100%] animate-pulse" />
    </PostCardWrapper>
  );
}
