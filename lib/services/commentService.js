import { CommentRepository } from "../repositories/commentRepository";

export const CommentService = {
  async getCommentsByHeadlineId(headlineId) {
    try {
      const data = await CommentRepository.findByHeadlineId(headlineId);
      return data;
    } catch (error) {
      console.error("CommentService.getCommentsByHeadlineId error:", error);
      return [];
    }
  },

  async addComment({ headlineId, userId, author, text }) {
    try {
      const data = await CommentRepository.create({
        headlineId,
        userId,
        author,
        text,
        image,
      });
      return data;
    } catch (error) {
      console.error("CommentService.addComment error:", error);
      throw error;
    }
  },
};
