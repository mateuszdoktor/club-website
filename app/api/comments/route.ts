import { db } from "@/lib/db/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const headlineId = searchParams.get("headlineId");
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const offset = parseInt(searchParams.get("offset") || "0", 10);

  if (!headlineId) {
    return NextResponse.json(
      { error: "headlineId is required" },
      { status: 400 }
    );
  }

  const filtered = db.comments
    .filter((comment) => comment.headlineId === Number(headlineId))
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  const paginated = filtered.slice(offset, offset + limit);

  return NextResponse.json(paginated);
}

export async function POST(request: Request) {
  try {
    const { headlineId, userId, author, text, image } = await request.json();

    if (!headlineId || !userId || !author || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newComment = {
      id: uuid(), 
      headlineId: Number(headlineId),
      userId,
      author,
      text,
      image: image || "/default-avatar.png",
      createdAt: new Date().toISOString(),
    };

    db.comments.push(newComment);

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}
