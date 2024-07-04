"use server";

import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { feedbackSchema } from "../schemas";
import { currentUserOwnsFeedback } from "./currentUserOwnsFeedback";

export const updateFeedback = currentUserOwnsFeedback
  .createServerAction()
  .input(z.object({ data: feedbackSchema }))
  .handler(async ({ input, ctx }) => {
    const prisma = await prismaSingleton();
    const { data } = input;
    try {
      await prisma.feedback.update({
        where: { id: ctx.feedbackId },
        data: {
          title: data.title,
          category: data.category,
          details: data.details,
          status: data.status,
        },
      });

      revalidatePath("/");
      revalidatePath(`/feedback/${ctx.feedbackId}`);
      revalidatePath(`/feedback/${ctx.feedbackId}/edit`);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update feedback");
    }
  });
