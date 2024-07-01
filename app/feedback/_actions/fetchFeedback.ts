"use server";

import prisma from "@/app/_lib/prismaSingleton";
import { Feedback } from "@prisma/client";

export async function fetchFeedback(): Promise<Feedback[]> {
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
