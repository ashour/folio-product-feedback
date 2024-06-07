import { Feedback, PrismaClient } from "@prisma/client";

export async function fetchFeedback(): Promise<Feedback[]> {
  const primsa = new PrismaClient();

  try {
    return await primsa.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch feedback");
  } finally {
    await primsa.$disconnect();
  }
}
