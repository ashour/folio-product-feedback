"use server";

import { revalidatePath } from "next/cache";
import { feedback } from "../services/feedbackService";
import { currentUserOwnsFeedback } from "./currentUserOwnsFeedback";

export const deleteFeedback = currentUserOwnsFeedback
  .createServerAction()
  .handler(async ({ ctx }) => {
    try {
      await feedback().delete(ctx.feedbackId!);

      revalidatePath("/");
      revalidatePath(`/feedback/${ctx.feedbackId}`);
      revalidatePath(`/feedback/${ctx.feedbackId}/edit`);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete feedback");
    }
  });
