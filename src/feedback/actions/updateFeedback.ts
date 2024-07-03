"use server";

import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { FeedbackSchema, feedbackSchema } from "../schemas";

export async function updateFeedback(
  id: string,
  data: FeedbackSchema,
): Promise<void> {
  const { success, data: safeData } = feedbackSchema.safeParse(data);
  if (!success) {
    throw new Error("Invalid data");
  }

  const prisma = await prismaSingleton();
  try {
    await prisma.feedback.update({
      where: { id },
      data: {
        title: safeData.title,
        category: safeData.category,
        details: safeData.details,
        status: safeData.status,
      },
    });

    revalidatePath("/");
    revalidatePath(`/feedback/${id}`);
    revalidatePath(`/feedback/${id}/edit`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update feedback");
  }
}
