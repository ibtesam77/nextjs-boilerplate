import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
}

export default function Paragraph(props: ParagraphProps) {
  const { children, ...restProps } = props;
  return <p {...restProps}>{children}</p>;
}
