import { ReactNode } from "react";
import Heading from "@/components/atoms/typography/Heading";
import HorizontalSeparator from "@/components/atoms/separators/HorizontalSeparator";

interface PageHeaderProps {
  title: string;
  children: ReactNode;
}

const PageHeader = (props: PageHeaderProps) => {
  const { title, children } = props;

  return (
    <div className="h-full mx-auto bg-blue-700 p-5">
      <div className="h-full pt-20 pb-9">
        <Heading
          variant="h1"
          className="text-white text-5xl font-semibold leading-none"
        >
          {title}
        </Heading>
      </div>
      <HorizontalSeparator />
      {children}
    </div>
  );
};

export default PageHeader;
