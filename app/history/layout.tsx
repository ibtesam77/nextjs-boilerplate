import type { Metadata } from "next";
import PageWrapper from "@/components/organisms/page/PageWrapper";

export const metadata: Metadata = {
  title: "History",
  description: "Browse the full collection of siege postcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageWrapper title="History">{children}</PageWrapper>;
}
