import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/organisms/layout/Navbar";
import HorizontalSeparator from "@/components/atoms/separators/HorizontalSeparator";
import { MenuItem } from "@/types/layout";

export const metadata: Metadata = {
  title: "Siege Postcards",
  description: "Browse the full collection of siege postcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navMenuItems: MenuItem[] = [
    {
      label: "Themes",
      href: "/themes",
    },
    {
      label: "Stories",
      href: "/stories",
    },
    {
      label: "Artists",
      href: "/artists",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "History",
      href: "/history",
    },
  ];

  return (
    <html lang="en">
      <body>
        <Navbar title="Postcards of the Siege" menuItems={navMenuItems} />
        <HorizontalSeparator />
        {children}
      </body>
    </html>
  );
}
