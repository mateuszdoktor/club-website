import { CommentRepository } from "../repositories/commentRepository";

export const CommentService = {
  async getCommentsByHeadlineId(headlineId) {
    try {
      return await CommentRepository.findByHeadlineId(headlineId);
    } catch (err) {
      console.error("CommentService.getCommentsByHeadlineId:", err);
      return [];
    }
  },

  async addComment({ headlineId, userId, author, image, text }) {
    try {
      return await CommentRepository.create({
        headlineId,
        userId,
        author,
        image,
        text,
      });
    } catch (err) {
      console.error("CommentService.addComment:", err);
      throw err;
    }
  },
};
