import { NextResponse } from "next/server";
import { getNewsData } from "@/lib/services/newsService";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "pl";

  try {
    const news = await getNewsData(country);
    return NextResponse.json(news);
  } catch (error) {
    console.error("Failed to fetch NewsData articles", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
