import db from "@/app/_lib/db";
import { Feedback } from "@prisma/client";

export async function fetchFeedback(): Promise<Feedback[]> {
  try {
    return await db.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch feedback");
  } finally {
    await db.$disconnect();
  }
}
