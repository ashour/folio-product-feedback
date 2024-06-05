"use server";

import { Feedback, PrismaClient } from "@prisma/client";
import { mockLoggedInUser } from "../../_lib/auth";

export async function createFeedback(data: FormData): Promise<Feedback> {
  const title = get(data, "title");
  const details = get(data, "details");
  const category = get(data, "category");

  const prisma = new PrismaClient();
  const author = await mockLoggedInUser();

  return await prisma.feedback.create({
    data: {
      title,
      details,
      category,
      authorId: author.id,
    },
  });
}

function get(data: FormData, key: string): string {
  return data.get(key) as string;
}
