"use client";

import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryPageProvider, {
  useGalleryPageContext,
} from "@/context/gallery/GalleryPageContext";
import usePostCardsData from "@/custom-hooks/gallery/useStoryBookPostCards";
import PostCard from "@/components/molecules/gallery/PostCard";
import PageWrapper from "@/components/organisms/page/PageWrapper";
import GalleryCategories from "./GalleryCategories";
import PostCardsPlaceholder from "./PostCardsPlaceholder";

function GalleryPage() {
  const {
    isLoading,
    isLoadingMore,
    data,
    totalRecords,
    pageSize,
    fetchNextPage,
  } = usePostCardsData();
  const { layout, switchLayout } = useGalleryPageContext();

  return (
    <PageWrapper title="Gallery">
      {/* Gallery Categories */}
      <GalleryCategories />

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
                onCardClick={() => null}
              />
            ))}
          </div>
        </InfiniteScroll>
        {isLoadingMore && <PostCardsPlaceholder pageSize={pageSize} />}
      </>
    </PageWrapper>
  );
}

export default function GalleryStoryBookPage() {
  return (
    <GalleryPageProvider>
      <GalleryPage />
    </GalleryPageProvider>
  );
}
