"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";
import useToggle from "@/custom-hooks/common/useToggle";
import usePostCardsData from "@/custom-hooks/gallery/usePostCardsData";
import PostCardsPlaceholder from "@/components/organisms/gallery/PostCardsPlaceholder";
import PostCard from "@/components/molecules/gallery/PostCard";
import PostCardDetails from "@/components/organisms/gallery/PostCardDetails";

export default function GalleryPage() {
  const { layout, switchLayout } = useGalleryPageContext();
  const {
    isLoading,
    isLoadingMore,
    data,
    totalRecords,
    pageSize,
    fetchNextPage,
  } = usePostCardsData();
  const { isOpen: isDetailsModalOpen, toggle: toggleDetailsModal } =
    useToggle();
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCardClick = useCallback(
    (targetIndex: number) => {
      setSelectedCardIndex(targetIndex);
      toggleDetailsModal();
    },
    [toggleDetailsModal]
  );

  const handleNextImage = useCallback(
    () => setSelectedCardIndex((prevState) => prevState + 1),
    []
  );

  return (
    <div>
      {/* Results Navbar */}
      <div className="w-full flex justify-between items-end py-6">
        <p className="text-white font-medium">
          Showing <span className="text-blue">{totalRecords} Postcards</span>
        </p>
        <div className="flex item-center gap-3.5">
          <Image
            src="/gallery/grid-light.png"
            alt="grid-light"
            width={35}
            height={35}
            className="cursor-pointer"
            style={{ opacity: layout === "grid-small" ? 1 : "0.6" }}
            onClick={() => switchLayout("grid-small")}
          />
          <Image
            src="/gallery/grid-single-light.png"
            alt="grid-single-light"
            width={35}
            height={35}
            className="cursor-pointer"
            style={{ opacity: layout === "grid-large" ? 1 : "0.6" }}
            onClick={() => switchLayout("grid-large")}
          />
        </div>
      </div>

      {/* Postcards Placeholder */}
      {isLoading && <PostCardsPlaceholder pageSize={pageSize} />}

      <>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchNextPage}
          hasMore={data.length < totalRecords}
          loader={null}
          // This means next function will be called when user scrolls "100% - 650px"
          // which means when second last row is scrolled into view
          // 325px height of single card which makes (2 * 325 = 650)
          scrollThreshold="650px"
        >
          <div className="flex flex-wrap w-[calc(100%+20px) -mx-2.5">
            {data.map((postCard, index) => (
              <PostCard
                key={postCard._id + "-" + index}
                postCard={postCard}
                onCardClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </InfiniteScroll>
        {isLoadingMore && <PostCardsPlaceholder pageSize={pageSize} />}
      </>

      {isDetailsModalOpen && (
        <PostCardDetails
          item={data[selectedCardIndex] || null}
          hasNext={Boolean(data[selectedCardIndex + 1])}
          onNext={handleNextImage}
          // hasPrevious={hasPreviousPostCard}
          // onPreviousImage={handlePreviousImage}
          close={toggleDetailsModal}
        />
      )}
    </div>
  );
}
