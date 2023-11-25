"use client";

import Paragraph from "@/components/atoms/typography/Paragraph";
import NavMenu from "@/components/molecules/layout/NavMenu";
import { MenuItem } from "@/types/layout";

interface NavbarProps {
  title: string;
  menuItems?: MenuItem[];
}

export default function Navbar({ title, menuItems = [] }: NavbarProps) {
  return (
    <>
      <div className="relative flex px-4 lg:px-5 items-center justify-between bg-blue-700 font-sig lg:text-3xl sm:text-2xl font-light h-[100px]">
        <Paragraph className="text-left text-blue-100 font-light">
          {title}
        </Paragraph>
        <NavMenu menuItems={menuItems} />
      </div>
    </>
  );
}
