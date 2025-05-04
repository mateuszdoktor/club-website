import { commentService } from "@/lib/services/commentService";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const headlineId = searchParams.get("headlineId");
  const limit = parseInt(searchParams.get("limit") || "5");
  const offset = parseInt(searchParams.get("offset") || "0");

  if (!headlineId) {
    return NextResponse.json({ error: "Missing headlineId" }, { status: 400 });
  }

  const comments = await commentService.getPaginatedComments(
    headlineId,
    limit,
    offset
  );

  return NextResponse.json(comments);
}
