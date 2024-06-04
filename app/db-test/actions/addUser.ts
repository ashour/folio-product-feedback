"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function addUser(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  try {
    await prisma.user.create({
      data: {
        firstName,
        lastName,
      },
    });

    revalidatePath("/db-test");
  } catch (error) {
    console.error(error);
  }
}
