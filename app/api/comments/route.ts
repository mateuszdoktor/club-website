import { db } from "@/lib/db/db"; 
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const headlineId = searchParams.get("headlineId");

  if (!headlineId) {
    return NextResponse.json(
      { error: "headlineId is required" },
      { status: 400 }
    );
  }

  const comments = db.comments.filter(
    (comment) => comment.headlineId === Number(headlineId)
  );

  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  try {
    const { headlineId, userId, author, text } = await request.json();

    if (!headlineId || !userId || !author || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newComment = {
      id: db.comments.length + 1,
      headlineId,
      userId,
      author,
      text,
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
