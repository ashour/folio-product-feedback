"use server";

import { currentUser } from "@/auth";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";

export async function deleteFeedback(id: string): Promise<void> {
  const prisma = await prismaSingleton();

  const feedback = await prisma.feedback.findUnique({ where: { id } });
  if (!feedback) {
    throw new Error("Feedback not found");
  }

  const user = await currentUser();
  if (feedback.authorId !== user.id) {
    throw new Error("You are not allowed to delete this feedback");
  }

  try {
    await prisma.feedback.delete({ where: { id } });

    revalidatePath("/");
    revalidatePath(`/feedback/${id}`);
    revalidatePath(`/feedback/${id}/edit`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete feedback");
  }
}
