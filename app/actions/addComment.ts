import { commentService } from "@/lib/services/commentService";
import { revalidatePath } from "next/cache";

export async function addCommentServerAction({
  headlineId,
  userId,
  text,
}: {
  headlineId: string;
  userId: string;
  text: string;
}) {
  if (!headlineId || !userId || !text || text.length < 5) {
    throw new Error("Invalid input");
  }

  const newComment = await commentService.addComment({
    headlineId,
    userId,
    text,
  });

  revalidatePath(`/headline/${headlineId}`);

  return {
    id: newComment.id,
    text: newComment.text,
    createdAt: newComment.createdAt,
    author: newComment.user.name,
    image: newComment.user.image ?? "/default-avatar.png",
  };
}
