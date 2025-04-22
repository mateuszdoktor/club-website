import { NextResponse } from "next/server";
import { HeadlineService } from "../../../lib/services/headlineService.js";

export async function GET() {
  const headlines = HeadlineService.getAllHeadlines();
  return NextResponse.json(headlines);
}

export async function POST(req) {
  const { title, summary } = await req.json();
  const newHeadline = HeadlineService.createHeadline(title, summary);
  return NextResponse.json(newHeadline, { status: 201 });
}
