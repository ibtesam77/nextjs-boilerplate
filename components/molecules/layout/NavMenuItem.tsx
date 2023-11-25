"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MenuItem } from "@/types/layout";

interface NavMenuItemProps extends MenuItem {
  isActive?: boolean;
}

export default function NavMenuItem(props: NavMenuItemProps) {
  const { label, href, isActive = false } = props;

  return (
    <li className="px-3">
      <Link
        href={href}
        className={twMerge(
          "text-white uppercase hover:text-blue focus:bg-none",
          isActive ? "text-blue" : ""
        )}
      >
        {label}
      </Link>
    </li>
  );
}
