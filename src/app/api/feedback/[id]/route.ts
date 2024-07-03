import { currentUser } from "@/auth";
import prismaSingleton from "@/db/lib/prisma/prismaSingleton";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const prisma = await prismaSingleton();

  const feedback = await prisma.feedback.findUnique({
    where: { id: params.id as string },
  });
  if (!feedback) {
    return NextResponse.json(
      { message: "Feedback not found" },
      { status: 404 },
    );
  }

  const author = await currentUser();
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
