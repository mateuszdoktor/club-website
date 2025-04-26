import { db } from "../db/db";

export const HeadlineRepository = {
  async findAll() {
    try {
      if (!db.headlines) {
        throw new Error("Headlines not found in DB.");
      }

      return db.headlines;
    } catch (error) {
      console.error("HeadlineRepository.findAll error:", error);
      throw error; 
    }
  },
};
