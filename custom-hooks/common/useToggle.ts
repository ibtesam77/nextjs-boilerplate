"use client";

import { useState, useCallback } from "react";

function useToggle(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return {
    isOpen,
    setIsOpen,
    toggle,
  };
}

export default useToggle;
