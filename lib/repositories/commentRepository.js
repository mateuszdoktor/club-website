import { db } from "../db/db";

export const CommentRepository = {
  async findByHeadlineId(headlineId) {
    try {
      return db.comments.filter((c) => c.headlineId === headlineId);
    } catch (err) {
      console.error("CommentRepository.findByHeadlineId:", err);
      throw err;
    }
  },

  async create({ headlineId, userId, author, image, text }) {
    try {
      const newComment = {
        id: `${Date.now()}`,
        headlineId,
        userId,
        author,
        image,
        text,
        createdAt: new Date().toISOString(),
      };
      db.comments.push(newComment);
      return newComment;
    } catch (err) {
      console.error("CommentRepository.create:", err);
      throw err;
    }
  },
};
