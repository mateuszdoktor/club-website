import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const headlineId = searchParams.get("headlineId");
  const limit = Number(searchParams.get("limit") ?? 5);
  const offset = Number(searchParams.get("offset") ?? 0);

  if (!headlineId) {
    return NextResponse.json(
      { error: "headlineId is required" },
      { status: 400 }
    );
  }

  const comments = db.comments
    .filter((c) => c.headlineId === headlineId)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
    .slice(offset, offset + limit);

  return NextResponse.json(comments);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { headlineId, userId, author, text, image } = body;

    if (!headlineId || !userId || !author || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newComment = {
      id: uuid(),
      headlineId,
      userId,
      author,
      text,
      image: image ?? "/default-avatar.png",
      createdAt: new Date().toISOString(),
    };

    db.comments.push(newComment);
    return NextResponse.json(newComment, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}
