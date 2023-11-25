"use client";

import { useCallback, useMemo, useState } from "react";
import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";
import useUpdateEffect from "@/custom-hooks/common/useUpdateEffect";
import useFetchRequest from "@/custom-hooks/common/useFetchRequest";
import usePostCardsLimit from "./usePostCardsLimit";
import { ErrorResponse, SuccessResponse, PostCard } from "@/types/gallery";
import { delay } from "@/utilities/common/helpers";

function usePostCardsData(): {
  isLoading: boolean;
  isLoadingMore: boolean;
  data: PostCard[];
  pageSize: number;
  totalRecords: number;
  fetchNextPage: () => void;
} {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { selectedSubCategory } = useGalleryPageContext();
  const pageSize = usePostCardsLimit();

  // Preparing filters
  const filters = new URLSearchParams({
    // size: `${pageSize}`,
    from: "0",
    size: "700",
    ...(selectedSubCategory ? { sub: `${selectedSubCategory}` } : {}),
  }).toString();

  const {
    data: postCardsData,
    isLoading: isLoadingPostCards,
    refetch: refetchPostCardsData,
  } = useFetchRequest<SuccessResponse<PostCard[]>, ErrorResponse>(() =>
    fetch(`/api/gallery?${filters}`)
  );

  useUpdateEffect(() => {
    refetchPostCardsData();
  }, [filters]);

  const paginatedPostCards = useMemo(
    () => (postCardsData?.data || []).slice(0, currentPage * pageSize),
    [postCardsData, currentPage, pageSize]
  );

  const fetchNextPage = useCallback(async () => {
    const totalFetchedPostCards = postCardsData?.meta?.totalCount || 0;
    if (paginatedPostCards.length < totalFetchedPostCards) {
      setIsLoadingMore(true);
      setCurrentPage((prevState) => prevState + 1);
      await delay(500);
      setIsLoadingMore(false);
    }
  }, [paginatedPostCards, postCardsData]);

  return {
    isLoading: isLoadingPostCards,
    isLoadingMore,
    data: paginatedPostCards,
    pageSize,
    totalRecords: postCardsData?.meta?.totalCount || 0,
    fetchNextPage,
  };
}

export default usePostCardsData;
