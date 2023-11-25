"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import Heading from "@/components/atoms/typography/Heading";
import Paragraph from "@/components/atoms/typography/Paragraph";
import IFrame from "./IFrame";
// TODO: Install Mirador becuase it was having dependency conflicts
// import Mirador3Viewer from "../mirador";
import { PostCard } from "@/types/gallery";
import { generateItemDisplayCode } from "@/utilities/gallery/helpers";

interface PostCardDetailsProps {
  close: () => void;
  onNext: () => void;
  // onPrevious: () => void;
  item: PostCard | null;
  hasNext?: boolean;
  // hasPrevious?: boolean;
}

export default function PostCardDetails(props: PostCardDetailsProps) {
  const {
    close,
    onNext,
    // onPrevious,
    item,
    hasNext = false,
    // hasPrevious = false,
  } = props;

  const [canvasIndex, setCanvasIndex] = useState<number>(0);

  const itemDisplayCode = useMemo(
    () => generateItemDisplayCode(item?._source.generalInfo.itemCode),
    [item]
  );

  const hasMultiplePages = useMemo(
    () => (item?._source?.pages?.length || 1) > 1 || false,
    [item]
  );

  const switchCanvasIndex = useCallback(() => {
    setCanvasIndex((prevState) =>
      prevState === 0 ? (item?._source?.pages.length || 1) - 1 : prevState - 1
    ); // if its first page than switch to last otherwise keep switching backwards
  }, [item]);

  return (
    <div className="flex items-center w-full h-full fixed transition ease-out top-0 left-0 overflow-x-hidden overflow-y-auto bg-blue-700/[.8] scale-100 opacity-100 duration-300 z-50">
      <div className=" bg-blue-600 w-full h-screen  flex-col xl:flex-row flex items-stretch relative">
        {/* Modal viewer */}
        <div className="xl:w-3/4 w-full flex items-center justify-center p-12 bg-blue-600">
          <IFrame
            itemId={item?._source?.generalInfo.itemId}
            canvasIndex={canvasIndex}
          />
          {/* <div className="relative w-full" style={{ height: "95vh" }}>
              <Mirador3Viewer
                config={{
                  id: "mirador-viewer",
                  windows: [
                    // { manifestId: `https://www.blavatnikarchive.org/manifest/view/${item?._source?.generalInfo.itemId}`, },
                    {
                      manifestId:
                        "https://purl.stanford.edu/bk785mr1006/iiif/manifest",
                    },
                  ],
                }}
              />
            </div> */}
        </div>
        {/* Modal Sidebar */}
        <div className="xl:w-1/4 w-full text-white flex flex-col bg-blue-700">
          <div className="ps-12 pe-8 min-h-[75px] flex items-center justify-between border-b border-blue">
            <span
              className="group flex items-center gap-2"
              onClick={hasNext ? onNext : undefined}
              style={{
                opacity: hasNext ? 1 : 0.5,
                cursor: hasNext ? "pointer" : "not-allowed",
              }}
            >
              <span className="text-sm font-semibold text-blue-100">
                NEXT POSTCARD
              </span>
              <Image
                src="/icons/arrow-right.png"
                alt="next icon"
                className="translate-x-0 relative transition duration-150 ease-in-out group-hover:transition group-hover:duration-150 group-hover:ease-in-out group-hover:translate-x-2"
                width={40}
                height={30}
              />
            </span>
            <div>
              <span
                onClick={close}
                className="p-2 flex hover:bg-blue xl:static absolute top-3 right-3 cursor-pointer"
              >
                <Image
                  src="/icons/times.png"
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </span>
            </div>
          </div>

          <div className="p-12 pe-2 h-full flex flex-col">
            <div className="w-full h-full overflow-y-auto overflow-x-hidden max-h-[calc(100vh-250px)] custom-scroll pe-10">
              <div className="mb-10">
                <span className="text-blue font-semibold text-sm">
                  No. {itemDisplayCode}
                </span>
                <Heading
                  variant="h3"
                  className="mt-6 mb-9 text-4xl font-sig font-light leading-10"
                >
                  {item?._source.generalInfo.title}
                </Heading>
                <Paragraph className="text-xl font-sig font-light text-blue-100">
                  {parse(item?._source.generalInfo.description || "")}
                </Paragraph>
              </div>

              <div className="mt-auto border-t border-blue pt-10">
                <div className="mb-10">
                  <h5 className="font-medium mb-1.5">THEMES</h5>
                  <Link
                    href="/gallery"
                    className="text-xl font-sig text-blue font-light"
                  >
                    Heroes and Enemies
                  </Link>
                </div>
                <div className="">
                  <h5 className="font-medium mb-1.5">STORIES</h5>
                  <Link
                    href="/gallery"
                    className="text-xl font-sig text-blue font-light"
                  >
                    “New Year’s Tree Decorated with Nazi Leaders”
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="ps-12 pe-8 mt-auto min-h-[75px] flex items-center justify-between border-t border-blue">
            <span
              className="group flex items-center gap-2"
              onClick={hasMultiplePages ? switchCanvasIndex : undefined}
              style={{
                opacity: hasMultiplePages ? 1 : 0.5,
                cursor: hasMultiplePages ? "pointer" : "not-allowed",
              }}
            >
              <Image
                src="/icons/arrow-left.png"
                alt="previous icon"
                className="translate-x-0 relative transition duration-150 ease-in-out group-hover:transition group-hover:duration-150 group-hover:ease-in-out group-hover:-translate-x-2"
                width={40}
                height={30}
              />
              <span className="text-sm font-semibold text-blue-100">
                SEE REVERSE
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
