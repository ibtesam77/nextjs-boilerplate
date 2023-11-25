"use client";

import { ReactNode, useMemo } from "react";
import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";

interface PostCardWrapperProps {
  children: ReactNode;
}

export default function PostCardWrapper({ children }: PostCardWrapperProps) {
  const { layout } = useGalleryPageContext();

  const widthClasses = useMemo(() => {
    if (layout === "grid-large")
      return "5xl:w-1/4 3xl:w-1/4 xl:w-1/3 md:1/3 sm:w-1/2 w-full";
    return "5xl:w-1/6 3xl:w-1/5 md:w-1/3 sm:w-1/2 w-full";
  }, [layout]);

  return (
    <div className={`px-2.5 my-2.5  ${widthClasses}`}>
      <div
        className={`group relative w-full h-full hover:z-20   border-transparent min-h-[150px]`}
      >
        {children}
      </div>
    </div>
  );
}
