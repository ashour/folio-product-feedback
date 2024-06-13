import prisma from "@/app/_lib/prismaSingleton";
import { feedbackSchema } from "@/app/feedback/_validation/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { mockLoggedInUser } from "../../_lib/auth";

export async function POST(req: NextRequest, res: NextResponse) {
  const requestData = await req.json();
  const { success, data: safeData } = feedbackSchema.safeParse(requestData);

  if (!success) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

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

  return NextResponse.json({ status: "success" });
}
