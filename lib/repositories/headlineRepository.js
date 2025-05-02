import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

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
