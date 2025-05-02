import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

const comments = [
  {
    headlineTitle: "Vinicius Jr achieves 200th win with Real Madrid",
    userName: "Emma Stone",
    text: "Amazing win, Vini is incredible!",
  },
  {
    headlineTitle: "Vinicius Jr achieves 200th win with Real Madrid",
    userName: "Carlos Rivera",
    text: "200 wins already? This guy is becoming a legend.",
  },
  {
    headlineTitle: "Vinicius Jr achieves 200th win with Real Madrid",
    userName: "Leila Grant",
    text: "So happy for Vinicius. He’s matured so much since his debut.",
  },
  {
    headlineTitle: "Real Madrid 1 - 0 Athletic Bilbao",
    userName: "John Doe",
    text: "That was a tense game! Glad we pulled it off late.",
  },
  {
    headlineTitle: "Real Madrid 1 - 0 Athletic Bilbao",
    userName: "Tomas Eriksen",
    text: "Bilbao made it tough. Solid performance from the midfield though.",
  },
  {
    headlineTitle: "Real Madrid 1 - 0 Athletic Bilbao",
    userName: "Emma Stone",
    text: "Not pretty but effective. That’s how you win titles.",
  },
  {
    headlineTitle: "Player ratings Real Madrid vs Athletic Bilbao ",
    userName: "Carlos Rivera",
    text: "Kroos was class as always. Glad Joselu got the winner.",
  },
  {
    headlineTitle: "Player ratings Real Madrid vs Athletic Bilbao ",
    userName: "John Doe",
    text: "Some low ratings felt harsh. Vini worked hard all game.",
  },
  {
    headlineTitle: "Player ratings Real Madrid vs Athletic Bilbao ",
    userName: "Leila Grant",
    text: "Courtois deserves more credit — that save late on was crucial.",
  },
  {
    headlineTitle: "Mbappe back in training with the team",
    userName: "Emma Stone",
    text: "So excited to see Mbappé back. Let’s go!",
  },
  {
    headlineTitle: "Mbappe back in training with the team",
    userName: "Tomas Eriksen",
    text: "If he’s fit, defenses better watch out.",
  },
  {
    headlineTitle: "Mbappe back in training with the team",
    userName: "Carlos Rivera",
    text: "This could change everything in the title race.",
  },
  {
    headlineTitle: "Carlo Ancelotti press conference",
    userName: "Leila Grant",
    text: "Ancelotti always keeps it classy. Respect to the man.",
  },
  {
    headlineTitle: "Carlo Ancelotti press conference",
    userName: "John Doe",
    text: "He knows how to manage pressure. Let’s hope the rotation works.",
  },
  {
    headlineTitle: "Carlo Ancelotti press conference",
    userName: "Emma Stone",
    text: "Looking forward to the Getafe match. Hope we stay sharp.",
  },
];

export async function POST() {
  try {
    for (const comment of comments) {
      const headline = await prisma.headline.findUnique({
        where: { title: comment.headlineTitle },
      });

      const user = await prisma.user.findFirst({
        where: { name: comment.userName },
      });

      if (!headline || !user) {
        console.warn(`Pominięto komentarz — brak headline lub user:`, comment);
        continue;
      }

      await prisma.comment.create({
        data: {
          headlineId: headline.id,
          userId: user.id,
          text: comment.text,
          createdAt: new Date(),
        },
      });
    }

    return NextResponse.json({ message: "Comments seeded successfully" });
  } catch (error) {
    console.error("Error seeding comments:", error);
    return NextResponse.json(
      { error: "Failed to seed comments" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
