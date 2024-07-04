import { createServerActionProcedure } from "zsa";
import { currentUser } from "./currentUser";

export const authenticated = createServerActionProcedure().handler(async () => {
  try {
    const user = await currentUser();

    return {
      user: {
        id: user.id,
      },
    };
  } catch (error) {
    throw new Error("User is not authenticated");
  }
});
