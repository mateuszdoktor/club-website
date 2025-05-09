import { prisma } from "@/lib/prisma";

export const headlineRepository = {
  findAll: async () => {
    try {
      return await prisma.headline.findMany({
        include: { author: true },
        orderBy: { createdAt: "desc" },
      });
    } catch (err) {
      console.error("headlineRepository.findAll:", err);
      throw err;
    }
  },
};
