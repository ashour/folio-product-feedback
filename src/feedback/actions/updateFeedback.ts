"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { feedbackSchema } from "../schemas";
import { feedback } from "../services/feedbackService";
import { currentUserOwnsFeedback } from "./currentUserOwnsFeedback";

export const updateFeedback = currentUserOwnsFeedback
  .createServerAction()
  .input(z.object({ data: feedbackSchema }))
  .handler(async ({ input, ctx }) => {
    try {
      await feedback().update(ctx.feedbackId!, input.data);

      revalidatePath("/");
      revalidatePath(`/feedback/${ctx.feedbackId}`);
      revalidatePath(`/feedback/${ctx.feedbackId}/edit`);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update feedback");
    }
  });
