import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "./IFeedbackRepository";

export class FeedbackRepository implements IFeedbackRepository {
  async all(): Promise<Feedback[]> {
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
  }
}
