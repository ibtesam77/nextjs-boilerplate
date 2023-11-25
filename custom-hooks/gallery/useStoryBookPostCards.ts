"use client";

import { useEffect, useCallback, useMemo, useState } from "react";
import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";
import usePostCardsLimit from "./usePostCardsLimit";
import { PostCard } from "@/types/gallery";
import { delay } from "@/utilities/common/helpers";
import postCardsData from "@/utilities/gallery/postcards";

function useStoryBookPostCardsData(): {
  isLoading: boolean;
  isLoadingMore: boolean;
  data: PostCard[];
  pageSize: number;
  totalRecords: number;
  fetchNextPage: () => void;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [postCards, setPostCards] = useState<PostCard[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { selectedSubCategory } = useGalleryPageContext();
  const pageSize = usePostCardsLimit();

  const fetchPostCards = async (): Promise<PostCard[]> => {
    return new Promise(async (resolve) => {
      await delay(10000);
      resolve(postCardsData);
    });
  };

  useEffect(() => {
    // For initial run or when sub category is changed
    setIsLoading(true);
    setPostCards([]);
    fetchPostCards()
      .then((data) => setPostCards(data))
      .finally(() => setIsLoading(false));
  }, [selectedSubCategory]);

  const paginatedPostCards = useMemo(
    () => postCards.slice(0, currentPage * pageSize),
    [postCards, currentPage, pageSize]
  );

  const fetchNextPage = useCallback(async () => {
    if (postCards.length > 0) {
      setIsLoadingMore(true);
      const data = await fetchPostCards();
      setPostCards((prevState) => [...prevState, ...data]);
      setCurrentPage((prevState) => prevState + 1);
      setIsLoadingMore(false);
    }
  }, [postCards]);

  return {
    isLoading,
    isLoadingMore,
    data: paginatedPostCards,
    pageSize,
    totalRecords: postCards.length,
    fetchNextPage,
  };
}

export default useStoryBookPostCardsData;
