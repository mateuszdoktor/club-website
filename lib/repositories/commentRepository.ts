import { prisma } from "@/lib/prisma";

export const commentRepository = {
  findByHeadlineId: async (headlineId: string, limit: number, offset: number) =>
    prisma.comment.findMany({
      where: { headlineId },
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
      include: {
        user: { select: { id: true, name: true, image: true } },
      },
    }),

  create: async ({
    headlineId,
    userId,
    text,
  }: {
    headlineId: string,
    userId: string,
    text: string,
  }) =>
    prisma.comment.create({
      data: { headlineId, userId, text },
      include: {
        user: { select: { id: true, name: true, image: true } },
      },
    }),
};
