import { mockLoggedInUser } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prismaSingleton";
import { feedbackSchema } from "@/app/feedback/_validation/schemas";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const feedback = await prisma.feedback.findUnique({
    where: { id: params.id as string },
  });
  if (!feedback) {
    return NextResponse.json(
      { message: "Feedback not found" },
      { status: 404 },
    );
  }

  const author = await mockLoggedInUser();
  if (feedback.authorId !== author.id) {
    return NextResponse.json(
      { message: "You are not allowed to update this feedback" },
      { status: 403 },
    );
  }

  const requestData = await req.json();
  const { success, data: safeData } = feedbackSchema.safeParse(requestData);
  if (!success) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  try {
    await prisma.feedback.update({
      where: { id: params.id as string },
      data: {
        title: safeData.title,
        category: safeData.category,
        details: safeData.details,
        status: safeData.status,
      },
    });

    revalidatePath("/");
    revalidatePath(`/feedback/${params.id}`);
    revalidatePath(`/feedback/${params.id}/edit`);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update feedback" },
      { status: 500 },
    );
  }

  return NextResponse.json({ status: "success" });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const feedback = await prisma.feedback.findUnique({
    where: { id: params.id as string },
  });
  if (!feedback) {
    return NextResponse.json(
      { message: "Feedback not found" },
      { status: 404 },
    );
  }

  const author = await mockLoggedInUser();
  if (feedback.authorId !== author.id) {
    return NextResponse.json(
      { message: "You are not allowed to delete this feedback" },
      { status: 403 },
    );
  }

  try {
    await prisma.feedback.delete({ where: { id: params.id as string } });

    revalidatePath("/");
    revalidatePath(`/feedback/${params.id}`);
    revalidatePath(`/feedback/${params.id}/edit`);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete feedback" },
      { status: 500 },
    );
  }

  return NextResponse.json({ status: "success" });
}
