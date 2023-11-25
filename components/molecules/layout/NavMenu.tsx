"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import useToggle from "@/custom-hooks/common/useToggle";
import MenuToggle from "./MenuToggle";
import NavMenuItem from "./NavMenuItem";
import { MenuItem } from "@/types/layout";

interface NavMenuProps {
  menuItems: Array<MenuItem>;
}

export default function NavMenu(props: NavMenuProps) {
  const pathname = usePathname();
  const { menuItems } = props;

  const { isOpen: isMenuCollapseOpen, toggle: toggleMenuCollapse } =
    useToggle(false);

  const mobileNavMenuCSS = useMemo(
    () =>
      isMenuCollapseOpen
        ? "opacity-1 h-56 z-20 shadow-xl lg:items-center shadow-blue-600/50 open"
        : "opacity-0 h-0 lg:z-20 -z-10 lg:items-center close",
    [isMenuCollapseOpen]
  );

  return (
    <>
      {/* Menu Toggler */}
      <MenuToggle
        size="lg"
        color="#fff"
        className="p-2 ml-auto lg:hidden z-30 bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md cursor-pointer"
        onClick={() => toggleMenuCollapse()}
      />
      <div
        className={twMerge(
          "lg:w-1/2 lg:static lg:justify-end lg:bg-transparent lg:transition-none lg:h-auto lg:opacity-100 w-full absolute left-0 top-[101px] bg-blue-600 flex items-start transition-all ease-out duration-500 lg:border-0 border-blue-100 border-b",
          mobileNavMenuCSS
        )}
      >
        <nav className="flex justify-end items-center py-2 font-avenir font-medium text-lg w-full">
          <ul className="flex lg:flex-row lg:py-0 lg:justify-end lg:gap-y-0 flex-col py-3 gap-y-3 w-full">
            {menuItems.map((item) => (
              <NavMenuItem
                key={item.label}
                {...item}
                isActive={pathname?.includes(item.href)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
