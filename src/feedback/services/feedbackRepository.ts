import prismaSingleton, {
  PrismaClientWithRowLevelSecurity,
} from "@/db/lib/prisma/prismaSingleton";
import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "./IFeedbackRepository";

export class FeedbackRepository implements IFeedbackRepository {
  async all(): Promise<Feedback[]> {
    return this.runQuery(async (db) => {
      return await db.feedback.findMany({
        orderBy: {
          updatedAt: "desc",
        },
      });
    });
  }

  findById(id: string): Promise<Feedback | null> {
    return this.runQuery(async (db) => {
      return await db.feedback.findUnique({ where: { id } });
    });
  }

  async create(data: Feedback): Promise<void> {
    return this.runQuery(async (db) => {
      await db.feedback.create({
        data: {
          title: data.title,
          category: data.category,
          details: data.details,
          authorId: data.authorId,
        },
      });
    });
  }

  async update(id: string, data: Feedback): Promise<void> {
    this.runQuery(async (db) => {
      await db.feedback.update({
        where: { id },
        data: {
          title: data.title,
          category: data.category,
          details: data.details,
          status: data.status,
        },
      });
    });
  }

  delete(id: string): Promise<void> {
    return this.runQuery(async (db) => {
      await db.feedback.delete({ where: { id } });
    });
  }

  private async runQuery<T>(
    query: (db: PrismaClientWithRowLevelSecurity) => Promise<T>,
  ): Promise<T> {
    const prisma = await prismaSingleton();

    try {
      const result: T = await query(prisma);
      await prisma.$disconnect();
      return result;
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      throw error;
    }
  }
}
