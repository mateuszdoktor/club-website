import { HeadlineRepository } from "../repositories/headlineRepository";

export const HeadlineService = {
  async getAllHeadlines() {
    try {
      return await HeadlineRepository.findAll();
    } catch (err) {
      console.error("HeadlineService.getAllHeadlines:", err);
      return [];
    }
  },
};
