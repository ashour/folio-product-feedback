"use server";

import { authenticated } from "@/auth/authenticated";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { feedbackSchema } from "../schemas";

export const createFeedback = authenticated
  .createServerAction()
  .input(feedbackSchema)
  .handler(async ({ input, ctx }) => {
    const prisma = await prismaSingleton();
    try {
      await prisma.feedback.create({
        data: {
          title: input.title,
          category: input.category,
          details: input.details,
          authorId: ctx.user.id,
        },
      });

      revalidatePath("/");
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add feedback");
    }
  });
