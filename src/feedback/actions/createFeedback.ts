"use server";

import { isAuthenticated } from "@/auth/isAuthenticated";
import { revalidatePath } from "next/cache";
import { feedbackSchema } from "../schemas";
import { feedback } from "../services/feedbackService";

export const createFeedback = isAuthenticated
  .createServerAction()
  .input(feedbackSchema)
  .handler(async ({ input, ctx }) => {
    try {
      await feedback().create({ ...input, authorId: ctx.user.id });
      revalidatePath("/");
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add feedback");
    }
  });
