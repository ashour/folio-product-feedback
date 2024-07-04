"use server";

import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { currentUserOwnsFeedback } from "./currentUserOwnsFeedback";

export const deleteFeedback = currentUserOwnsFeedback
  .createServerAction()
  .handler(async ({ ctx }) => {
    const prisma = await prismaSingleton();

    try {
      await prisma.feedback.delete({ where: { id: ctx.feedbackId } });

      revalidatePath("/");
      revalidatePath(`/feedback/${ctx.feedbackId}`);
      revalidatePath(`/feedback/${ctx.feedbackId}/edit`);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete feedback");
    }
  });
