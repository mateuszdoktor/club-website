import { db } from "../db/db";

export const HeadlineRepository = {
  async findAll() {
    try {
      if (!db.headlines) throw new Error("Headlines not found in DB.");
      return db.headlines;
    } catch (err) {
      console.error("HeadlineRepository.findAll:", err);
      throw err;
    }
  },
};
