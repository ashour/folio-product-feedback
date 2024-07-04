import { Feedback } from "@prisma/client";
import prismaSingleton from "../../db/lib/prisma/prismaSingleton";
import { IFeedbackRepository } from "./IFeedbackRepository";

export class FeedbackRepository implements IFeedbackRepository {
  async fetchFeedback(): Promise<Feedback[]> {
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
