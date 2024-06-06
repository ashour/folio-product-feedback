import { PrismaClient } from "@prisma/client";
import { mockLoggedInUser } from "../../_lib/auth";

export async function POST(req: Request, res: Response) {
  const form = await req.formData();
  const data = Object.fromEntries(form.entries());

  const prisma = new PrismaClient();
  const author = await mockLoggedInUser();

  await prisma.feedback.create({
    data: {
      title: data.title as string,
      category: data.category as string,
      details: data.details as string,
      authorId: author.id,
    },
  });

  return Response.json({ status: "success" });
}
