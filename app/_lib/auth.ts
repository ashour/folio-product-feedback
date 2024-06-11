import { User } from "@prisma/client";
import db from "./db";

let _mockLoggedInUser: User | null;

export async function mockLoggedInUser(): Promise<User> {
  if (!_mockLoggedInUser) {
    _mockLoggedInUser = await db.user.findFirstOrThrow({
      where: { username: "thebigyou" },
    });
  }

  return _mockLoggedInUser;
}
