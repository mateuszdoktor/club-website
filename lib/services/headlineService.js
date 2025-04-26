import { HeadlineRepository } from "../repositories/headlineRepository";

export const HeadlineService = {
  async getAllHeadlines() {
    try {
      const data = await HeadlineRepository.findAll();
      return data;
    } catch (error) {
      console.error("HeadlineService.getAllHeadlines error:", error);
      return [];
    }
  },
};
