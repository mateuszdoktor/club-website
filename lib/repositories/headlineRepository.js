import { db } from "../db/db";
// import { createHeadline } from "../../models/headline";

export const HeadlineRepository = {
  findAll() {
    return db.headlines;
  },

//   findById(id) {
//     return db.headlines.find((h) => h.id === id);
//   },

//   create(data) {
//     const newHeadline = createHeadline({
//       id: Date.now(),
//       createdAt: new Date(),
//       ...data,
//     });
//     db.headlines.push(newHeadline);
//     return newHeadline;
//   },

//   delete(id) {
//     const index = db.headlines.findIndex((h) => h.id === id);
//     if (index === -1) return false;
//     db.headlines.splice(index, 1);
//     return true;
//   },
};
