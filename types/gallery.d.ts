export type MainCategory = {
  label: string;
  value: "themes" | "topics" | "styles";
  isDisabled?: boolean;
};

export type SubCategory = {
  label: string;
  value: number;
  isDisabled?: boolean;
};

export type PostCardLayout = "grid-small" | "grid-large";

export type PostCardPage = {
  id: number;
  pageNo: number;
  iIIFID: string;
  width: number;
  height: number;
  thumbnailUrl: string;
  pdfImageUrl: string;
  squareImage: string;
  landscapeImage: string;
  portraitImage: string;
  landscapeImage31: string;
  landscapeImage32: string;
};

export interface PostCard {
  _index: string;
  _id: string;
  _source: {
    id: number;
    generalInfo: {
      itemId: number;
      itemCode: string;
      title: string;
      description: string;
      resourceUrl: string;
      socialMediaThumbnail: string;
      isPublished: boolean;
      squareImage: string;
      landscapeImage: string;
      portraitImage: string;
    };
    pages: PostCard[];
  };
}

export type GalleryCategoriesResponse = {
  mainCategories: MainCategory[];
  subCategories: SubCategory[];
  selectedMainCategory: MainCategory["value"] | null;
  selectedSubCategory: SubCategory["value"] | null;
  handleMainCategoryClick: (mainCategory: MainCategory) => void;
  handleSubCategoryClick: (subCategory: SubCategory) => void;
  clearFilter: () => void;
};

export type GalleryPageContextType = {
  layout: PostCardLayout;
  // eslint-disable-next-line no-unused-vars
  switchLayout: (selectedLayout: PostCardLayout) => void;
} & GalleryCategoriesResponse;

export type InfiniteQueryResponse = {
  page: number;
  data: PostCard[];
};
