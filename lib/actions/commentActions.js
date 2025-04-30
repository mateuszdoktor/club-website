import { CommentService } from "../services/commentService";
import { getCurrentUser } from "../auth/currentUser";

export async function addComment(headlineId, text) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You must be logged in to comment.");

  return await CommentService.addComment({
    headlineId,
    userId: user.id,
    author: user.name,
    image: user.image,
    text,
  });
}
