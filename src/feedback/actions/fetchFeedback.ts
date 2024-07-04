"use server";

import { authenticated } from "@/auth/authenticated";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";

export const fetchFeedback = authenticated
  .createServerAction()
  .handler(async () => {
    const prisma = await prismaSingleton();

    try {
      return await prisma.feedback.findMany({
        orderBy: {
          updatedAt: "desc",
        },
      });
    } catch (error) {
      console.error(error);
      throw "Failed to fetch feedback";
    } finally {
      await prisma.$disconnect();
    }
  });
