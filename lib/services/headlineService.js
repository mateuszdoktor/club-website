import { headlineRepository } from "@/lib/repositories/headlineRepository";

export const headlineService = {
  getAllHeadlines: async () => {
    try {
      return await headlineRepository.findAll();
    } catch (err) {
      console.error("headlineService.getAllHeadlines:", err);
      return [];
    }
  },
};
