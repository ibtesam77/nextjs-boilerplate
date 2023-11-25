"use client";

import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";
import Button from "@/components/atoms/buttons/Button";
import Cross from "@/components/atoms/icons/Cross";
import HorizontalSeparator from "@/components/atoms/separators/HorizontalSeparator";

export default function GalleryCategories() {
  const {
    mainCategories,
    subCategories,
    selectedMainCategory,
    selectedSubCategory,
    handleMainCategoryClick,
    handleSubCategoryClick,
    clearFilter,
  } = useGalleryPageContext();

  return (
    <>
      {/* Main categories section */}
      <div className="h-full flex flex-wrap py-10">
        <div className="lg:w-3/5 w-full">
          <p className="text-white text-2xl font-light font-sig pe-5 mb-5 text-height leading-9">
            Browse the full collection of Siege postcards, or choose one of the
            available filters to see postcards related to a particular theme,
            topic, or art style.
          </p>
        </div>
        <div className="lg:w-2/5 w-full flex flex-wrap lg:justify-end items-center gap-3">
          {mainCategories.map((mainCategory) => (
            <Button
              key={mainCategory.value}
              active={selectedMainCategory === mainCategory.value}
              className="uppercase font-semibold"
              disabled={mainCategory.isDisabled}
              onClick={() => handleMainCategoryClick(mainCategory)}
            >
              {mainCategory.label}
            </Button>
          ))}
        </div>
      </div>
      <HorizontalSeparator />
      {/* Sub categories section */}
      {selectedMainCategory && (
        <>
          <div className="flex justify-between items-center gap-5">
            {/* Sub categories */}
            <div className="h-full flex flex-wrap items-center gap-2.5 py-10">
              {subCategories.map((subCategory) => (
                <Button
                  key={subCategory.value}
                  color="transparent"
                  variant="outlined"
                  active={selectedSubCategory === subCategory.value}
                  onClick={() => handleSubCategoryClick(subCategory)}
                  className="text-lg font-medium rounded-[30px]"
                >
                  {subCategory.label}
                </Button>
              ))}
            </div>
            {/* Clear Filter */}
            <Button className="rounded-3xl !p-3" onClick={clearFilter}>
              <Cross size="20" color="#fff" />
            </Button>
          </div>
          <HorizontalSeparator />
        </>
      )}
    </>
  );
}
