import { db } from "../db/db";

export const CommentRepository = {
  async findByHeadlineId(headlineId) {
    try {
      return db.comments.filter((comment) => comment.headlineId === headlineId);
    } catch (error) {
      console.error("CommentRepository.findByHeadlineId error:", error);
      throw error;
    }
  },

  async create({ headlineId, userId, author, text }) {
    try {
      const newComment = {
        id: db.comments.length + 1, 
        headlineId,
        userId,
        author,
        text,
        createdAt: new Date().toISOString(),
      };
      db.comments.push(newComment);
      return newComment;
    } catch (error) {
      console.error("CommentRepository.create error:", error);
      throw error;
    }
  },
};
