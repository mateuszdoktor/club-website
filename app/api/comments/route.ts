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
    .slice(offset, offset + limit)
    .map((comment) => {
      const user = db.users.find((u) => u.id === comment.userId);
      return {
        ...comment,
        image: user?.image ?? "/default-avatar.png",
      };
    });

  return NextResponse.json(comments);
}


export async function POST(req: Request) {
  try {
    const { headlineId, userId, author, text } = await req.json();

    if (!headlineId || !userId || !author || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newComment = {
      id: uuid(),
      headlineId,
      userId,
      author,
      text,
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
