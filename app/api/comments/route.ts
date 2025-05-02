import { commentService } from "@/lib/services/commentService";
import { NextRequest, NextResponse } from "next/server";
import { Comment, User } from "@prisma/client";

type CommentWithUser = Comment & {
  user: Pick<User, "name" | "image">;
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const headlineId = searchParams.get("headlineId");
  const limit = Number(searchParams.get("limit") ?? 5);
  const offset = Number(searchParams.get("offset") ?? 0);

  if (!headlineId) {
    return NextResponse.json({ error: "Missing headlineId" }, { status: 400 });
  }

  const comments: CommentWithUser[] = await commentService.getPaginatedComments(
    headlineId,
    limit,
    offset
  );

  return NextResponse.json(
    comments.map((c) => ({
      id: c.id,
      text: c.text,
      createdAt: c.createdAt,
      author: c.user.name,
      image: c.user.image ?? "/default-avatar.png",
    }))
  );
}

export async function POST(req: NextRequest) {
  try {
    const { headlineId, userId, text } = await req.json();

    if (!headlineId || !userId || !text) {
      console.error("Missing fields", { headlineId, userId, text });
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newComment = await commentService.addComment({
      headlineId,
      userId,
      text,
    });

    return NextResponse.json(
      {
        id: newComment.id,
        text: newComment.text,
        createdAt: newComment.createdAt,
        author: newComment.user.name,
        image: newComment.user.image ?? "/default-avatar.png",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Server error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
