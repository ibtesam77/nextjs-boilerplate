"use client";

import { useMemo } from "react";
import Hamburger from "@/components/atoms/icons/Hamburger";

interface MenuToggleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size: "sm" | "md" | "lg" | "xl";
  color: string;
}

export default function MenuToggle(props: MenuToggleProps) {
  const { size, color, ...restProps } = props;

  const iconSize = useMemo(() => {
    if (size === "sm") return "10px";
    if (size === "md") return "14px";
    if (size === "lg") return "18px";
    if (size === "xl") return "22px";
    return "20px";
  }, [size]);

  return (
    <div {...restProps}>
      <Hamburger size={iconSize} color={color} />
    </div>
  );
}
