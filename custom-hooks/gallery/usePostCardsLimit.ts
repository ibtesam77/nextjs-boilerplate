"use client";

import { useMemo } from "react";
// import { useGalleryPageContext } from "@/context/gallery/GalleryPageContext";
import useBreakpoints from "../common/useBreakpoints";

const NUMBER_OF_ROWS = 8;

function usePostCardsLimit(): number {
  const breakpoints = useBreakpoints();
  // const { layout } = useGalleryPageContext();

  const cardRowLimit = useMemo(() => {
    // if (breakpoints["undefined"]) return 0;
    // if (breakpoints["5xl"]) return layout === "grid-large" ? 4 : 6;
    // if (breakpoints["4xl"] || breakpoints["3xl"])
    //   return layout === "grid-large" ? 3 : 5;
    // if (breakpoints["2xl"] || breakpoints["lg"] || breakpoints["md"])
    //   return layout === "grid-large" ? 2 : 3;
    // return layout === "grid-large" ? 1 : 2;
    if (breakpoints["undefined"]) return 0;
    if (breakpoints["5xl"]) return 6;
    if (breakpoints["4xl"] || breakpoints["3xl"]) return 5;
    if (breakpoints["2xl"] || breakpoints["lg"] || breakpoints["md"]) return 3;
    return 2;
  }, [breakpoints]);

  return cardRowLimit * NUMBER_OF_ROWS;
}

export default usePostCardsLimit;
