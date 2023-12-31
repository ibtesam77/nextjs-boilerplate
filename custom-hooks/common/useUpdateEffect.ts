"use client";

import { EffectCallback, useEffect, useRef, DependencyList } from "react";

export default function useUpdateEffect(
  callback: EffectCallback,
  dependencies?: DependencyList
) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
