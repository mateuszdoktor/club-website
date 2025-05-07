import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

const isValidImageUrl = (url: string) => {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
};

export async function POST(req: Request) {
  const { name, email, password, image } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  if (image && !isValidImageUrl(image)) {
    return NextResponse.json(
      { message: "Invalid image URL format" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      image:
        image ||
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    },
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
