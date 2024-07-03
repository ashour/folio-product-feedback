"use server";

import prismaSingleton from "@@/prisma/prismaSingleton";
import { type Feedback } from "@prisma/client";

export async function fetchFeedback(): Promise<Feedback[]> {
  const prisma = await prismaSingleton();

  try {
    return await prisma.feedback.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch feedback");
  } finally {
    await prisma.$disconnect();
  }
}
