"use server";

import { isAuthenticated } from "@/auth/isAuthenticated";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { feedbackSchema } from "../schemas";

export const createFeedback = isAuthenticated
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
