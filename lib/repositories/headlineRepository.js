import { prisma } from "@/lib/prisma";

export const HeadlineRepository = {
  async findAll() {
    try {
      return await prisma.headline.findMany({
        include: {
          author: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (err) {
      console.error("HeadlineRepository.findAll:", err);
      throw err;
    }
  },
};
