import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

export default function Heading(props: HeadingProps) {
  const { variant, children, className, ...restProps } = props;
  return (
    <p className={twMerge(variant, className)} {...restProps}>
      {children}
    </p>
  );
}
