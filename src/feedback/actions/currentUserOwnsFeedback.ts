import { isAuthenticated } from "@/auth/isAuthenticated";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { z } from "zod";
import { createServerActionProcedure } from "zsa";

export const currentUserOwnsFeedback = createServerActionProcedure(
  isAuthenticated,
)
  .input(
    z.object({
      feedbackId: z.string(),
    }),
  )
  .handler(async ({ input, ctx }) => {
    const prisma = await prismaSingleton();

    const feedback = await prisma.feedback.findUnique({
      where: { id: input.feedbackId },
    });

    if (!feedback) {
      throw new Error("Feedback not found");
    }

    if (ctx.user.id !== feedback.authorId) {
      throw new Error("You are not authorized to update this feedback");
    }

    return {
      user: ctx.user,
      feedbackId: feedback.id,
    };
  });
