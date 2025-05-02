import { commentRepository } from "@/lib/repositories/commentRepository";

export const commentService = {
  async getPaginatedComments(headlineId, limit, offset) {
    return await commentRepository.findByHeadlineId(headlineId, limit, offset);
  },

  async addComment({ headlineId, userId, text }) {
    return await commentRepository.create({ headlineId, userId, text });
  },
};
