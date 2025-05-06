"use server";

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

  await commentService.addComment({ headlineId, userId, text });
  revalidatePath(`/headline/${headlineId}`);
}
