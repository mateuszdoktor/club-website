import { prisma } from "@/lib/prisma";

export const commentRepository = {
  async findByHeadlineId(headlineId, limit, offset) {
    return await prisma.comment.findMany({
      where: { headlineId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  },

  async create({ headlineId, userId, text }) {
    return await prisma.comment.create({
      data: {
        headlineId,
        userId,
        text,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  },
};
