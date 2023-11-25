import { NextResponse } from "next/server";
import {
  elasticBasicAuth,
  elasticServerUrlItemIndex,
} from "../helpers/elasticsearch";
import gallerySearchQuery from "../helpers/elasticsearch/gallery-search-query";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from");
  const page = searchParams.get("page");
  const sub = searchParams.get("sub");
  const size = searchParams.get("size");

  const elasticSearchItemIndex = elasticServerUrlItemIndex() + "/_search";
  const basicAuth = elasticBasicAuth();
  // const size = 36;

  const psize = Number(size) > 0 ? Number(size) : 30;
  const parsedFrom = page ? (Number(page) - 1) * psize : Number(from);
  if (isNaN(parsedFrom) || typeof parsedFrom !== "number") {
    return NextResponse.json(
      {
        status: 400,
        message: "From parameter is missing.",
        success: false,
      },
      { status: 400 }
    );
  }
  const searchJson = gallerySearchQuery(
    parsedFrom,
    psize,
    typeof sub === "string" ? sub : undefined
  );
  // res.status(200).json(searchJson);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: basicAuth,
    },
    body: JSON.stringify(searchJson),
  };
  try {
    const response = await fetch(elasticSearchItemIndex, options);
    const data = await response.json();
    const totalRecords = data.hits.total;
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: data.hits.hits,
      success: true,
      meta: {
        totalCount: totalRecords,
        from: parsedFrom,
        pageSize: psize,
        currentPage: Math.floor(parsedFrom / psize) + 1,
        totalPages: Math.ceil(totalRecords / psize),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 500,
        message: `Internal Server Error ${error}`,
        success: false,
      },
      { status: 500 }
    );
  }
}
