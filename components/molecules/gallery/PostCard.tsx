"use client";

import { useMemo } from "react";
import Image from "next/image";
import PostCardWrapper from "./PostCardWrapper";
import { PostCard as IPostCard } from "@/types/gallery";
import { generateItemDisplayCode } from "@/utilities/gallery/helpers";

interface PostCardProps {
  postCard: IPostCard;
  // eslint-disable-next-line no-unused-vars
  onCardClick: (card: IPostCard) => void;
}

export default function PostCard(props: PostCardProps) {
  const { postCard, onCardClick } = props;
  const {
    _source: {
      generalInfo: { itemCode, title, squareImage, socialMediaThumbnail },
    },
  } = postCard;

  const itemDisplayCode = useMemo(
    () => generateItemDisplayCode(itemCode),
    [itemCode]
  );

  return (
    <PostCardWrapper>
      <div className="h-full w-full transition duration-100 ease-in-out overflow-hidden group-hover:opacity-0 group-hover:z-0  bg-blue">
        <figure className="flex items-center justify-center w-full h-full">
          <Image
            src="/gallery/placeholder-xl.png"
            className="h-full w-full"
            alt="Placeholder"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            src={squareImage}
            className="max-w-full max-h-full w-full h-full object-cover absolute left-0 top-0"
            alt={title}
            width="0"
            height="0"
            sizes="100vw"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="w-full flex flex-col bg-blue-600 transition duration-100 ease-in-out absolute top-0 left-0 z-0 opacity-0 group-hover:z-10 group-hover:opacity-100 border-b-[20px] border-blue-700">
        <figure className="flex items-center justify-center transition transform duration-150 ease-out">
          <Image
            src="/gallery/placeholder-xl.png"
            className="h-full w-full"
            alt="Placeholder"
            width="0"
            height="0"
            sizes="100vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={socialMediaThumbnail}
            className="p-5 max-w-full max-h-full absolute hidden 
            opacity-0 group-hover:block group-hover:opacity-100 transition duration-150 ease-out group-hover:ease-in group-hover:transition group-hover:duration-300"
            alt={title}
          />
        </figure>
        <div className="mt-auto relative h-[80px] pb-[32px]">
          <div className="text-center px-5 leading-5">
            <span className="text-white font-sig font-light text-base leading-3">
              {title}
            </span>
          </div>
          <div className="pb-2 absolute bottom-0">
            <span className="text-sm font-semibold text-blue ps-2.5">
              No. {itemDisplayCode}
            </span>
          </div>
        </div>
      </div>

      <span
        onClick={() => onCardClick(postCard)}
        className="absolute cursor-pointer top-0 left-0 w-full h-full z-10"
      />
    </PostCardWrapper>
  );
}
