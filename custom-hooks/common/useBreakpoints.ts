"use client";

import { useMemo } from "react";
import useWindowSize from "./useWindowSize";

interface BreakPointsResponse {
  undefined: boolean; // will be used to determine if no breakpoint is decided
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  "2xl": boolean;
  "3xl": boolean;
  "4xl": boolean;
  "5xl": boolean;
}

function useBreakpoints(): BreakPointsResponse {
  const { width = 0 } = useWindowSize();

  const breakPoints = useMemo(
    () => ({
      undefined: width === 0, // will be used  as no breakpoint is decided
      xs: width <= 420,
      sm: width > 420 && width <= 768,
      md: width > 768 && width <= 992,
      lg: width > 992 && width <= 1025,
      xl: width > 1025 && width <= 1280,
      "2xl": width > 1280 && width <= 1367,
      "3xl": width > 1367 && width <= 1600,
      "4xl": width > 1600 && width <= 1900,
      "5xl": width > 1900,
    }),
    [width]
  );

  return {
    ...breakPoints,
  };
}

export default useBreakpoints;
