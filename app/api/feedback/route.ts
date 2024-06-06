import { createFeedbackSchema } from "@/app/feedback/_validation/createFeedbackSchema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { mockLoggedInUser } from "../../_lib/auth";

export async function POST(req: Request, res: Response) {
  const requestData = await req.json();
  const { success, data: safeData } =
    createFeedbackSchema.safeParse(requestData);

  if (!success) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  const prisma = new PrismaClient();
  const author = await mockLoggedInUser();

  try {
    await prisma.feedback.create({
      data: {
        title: safeData.title,
        category: safeData.category,
        details: safeData.details,
        authorId: author.id,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to add feedback" },
      { status: 500 },
    );
  }

  return Response.json({ status: "success" });
}
