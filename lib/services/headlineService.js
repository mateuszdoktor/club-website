import { HeadlineRepository } from "../repositories/headlineRepository";

export const HeadlineService = {
  getAllHeadlines() {
    return HeadlineRepository.findAll();
  },

//   getHeadlineById(id) {
//     const headline = HeadlineRepository.findById(id);
//     if (!headline) throw new Error("Headline not found");
//     return headline;
//   },

//   createHeadline(title, summary) {
//     return HeadlineRepository.create({ title, summary });
//   },

//   deleteHeadline(id) {
//     return HeadlineRepository.delete(id);
//   },
};
