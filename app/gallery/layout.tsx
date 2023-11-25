import type { Metadata } from "next";
import PageWrapper from "@/components/organisms/page/PageWrapper";
import GalleryPageProvider from "@/context/gallery/GalleryPageContext";
import GalleryCategories from "@/components/organisms/gallery/GalleryCategories";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse the full collection of siege postcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper title="Gallery">
      <GalleryPageProvider>
        {/* Gallery Categories */}
        <GalleryCategories />

        {children}
      </GalleryPageProvider>
    </PageWrapper>
  );
}
