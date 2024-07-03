"use server";

import { currentUser } from "@/auth";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { feedbackSchema, type FeedbackSchema } from "../schemas";

export async function createFeedback(data: FeedbackSchema): Promise<void> {
  const { success, data: safeData } = feedbackSchema.safeParse(data);

  if (!success) {
    throw new Error("Invalid data");
  }

  const author = await currentUser();
  const prisma = await prismaSingleton();

  try {
    await prisma.feedback.create({
      data: {
        title: safeData.title,
        category: safeData.category,
        details: safeData.details,
        authorId: author.id,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add feedback");
  }
}
