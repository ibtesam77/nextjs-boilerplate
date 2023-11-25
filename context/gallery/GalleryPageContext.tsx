"use client";

import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  GalleryCategoriesResponse,
  GalleryPageContextType,
  MainCategory,
  PostCardLayout,
  SubCategory,
} from "@/types/gallery";
import {
  MAIN_CATEGORIES,
  SUB_CATEGORIES,
} from "@/utilities/gallery/categories";

export const GalleryPageContext = createContext<GalleryPageContextType>({
  layout: "grid-small",
  switchLayout: () => null,
  mainCategories: MAIN_CATEGORIES,
  subCategories: SUB_CATEGORIES,
  selectedMainCategory: null,
  selectedSubCategory: null,
  handleMainCategoryClick: () => null,
  handleSubCategoryClick: () => null,
  clearFilter: () => null,
});

export const useGalleryPageContext = () => useContext(GalleryPageContext);

function GalleryPageProvider({ children }: { children: ReactNode }) {
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<GalleryCategoriesResponse["selectedMainCategory"]>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<GalleryCategoriesResponse["selectedSubCategory"]>(null);
  const [layout, setLayout] = useState<PostCardLayout>("grid-small");

  const handleMainCategoryClick = useCallback(
    (newSelectedMainCategory: MainCategory) => {
      setSelectedMainCategory(newSelectedMainCategory.value);
    },
    []
  );

  const handleSubCategoryClick = useCallback(
    (newSelectedSubCategory: SubCategory) => {
      setSelectedSubCategory(newSelectedSubCategory.value);
    },
    []
  );

  const clearFilter = useCallback(() => {
    setSelectedMainCategory(null);
    setSelectedSubCategory(null);
  }, []);

  const switchLayout = useCallback((targetLayout: PostCardLayout) => {
    setLayout(targetLayout);
  }, []);

  return (
    <GalleryPageContext.Provider
      value={{
        layout,
        switchLayout,
        mainCategories: MAIN_CATEGORIES,
        subCategories: SUB_CATEGORIES,
        selectedMainCategory,
        selectedSubCategory,
        handleMainCategoryClick,
        handleSubCategoryClick,
        clearFilter,
      }}
    >
      {children}
    </GalleryPageContext.Provider>
  );
}

export default GalleryPageProvider;
