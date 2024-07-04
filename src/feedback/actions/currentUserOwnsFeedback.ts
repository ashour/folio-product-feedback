import { isAuthenticated } from "@/auth/isAuthenticated";
import { z } from "zod";
import { createServerActionProcedure } from "zsa";
import { feedback } from "../services/feedbackService";

export const currentUserOwnsFeedback = createServerActionProcedure(
  isAuthenticated,
)
  .input(
    z.object({
      feedbackId: z.string(),
    }),
  )
  .handler(async ({ input, ctx }) => {
    const feedbackItem = await feedback().findAndGuardForOwner(
      ctx.user.id,
      input.feedbackId,
    );

    return {
      user: ctx.user,
      feedbackId: feedbackItem.id,
    };
  });
