import { NextResponse } from "next/server";
import { getNewsData } from "@/lib/services/newsService";

export async function GET(req: Request) {
  const country = new URL(req.url).searchParams.get("country") ?? "pl";

  try {
    const news = await getNewsData(country);
    return NextResponse.json(news);
  } catch (err) {
    console.error("News fetch error", err);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
