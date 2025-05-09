import { commentRepository } from "@/lib/repositories/commentRepository";

export const commentService = {
  getPaginatedComments: (headlineId: string, limit: number, offset: number) =>
    commentRepository.findByHeadlineId(headlineId, limit, offset),

  addComment: ({
    headlineId,
    userId,
    text,
  }: {
    headlineId: string,
    userId: string,
    text: string,
  }) => commentRepository.create({ headlineId, userId, text }),
};
