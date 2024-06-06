import { PrismaClient, User } from "@prisma/client";

let _mockLoggedInUser: User | null;

export async function mockLoggedInUser(): Promise<User> {
  if (!_mockLoggedInUser) {
    const prisma = new PrismaClient();
    _mockLoggedInUser = await prisma.user.findFirstOrThrow({
      where: { username: "thebigyou" },
    });
  }

  return _mockLoggedInUser;
}
