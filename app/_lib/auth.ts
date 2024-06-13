import { User } from "@prisma/client";
import prisma from "./prismaSingleton";

let _mockLoggedInUser: User | null;

export async function mockLoggedInUser(): Promise<User> {
  if (!_mockLoggedInUser) {
    _mockLoggedInUser = await prisma.user.findFirstOrThrow({
      where: { username: "thebigyou" },
    });
  }

  return _mockLoggedInUser;
}
