import { createServerActionProcedure } from "zsa";
import { auth } from "./authService";

export const isAuthenticated = createServerActionProcedure().handler(
  async () => {
    try {
      const user = await auth().currentUser();

      return {
        user: {
          id: user.id,
        },
      };
    } catch (error) {
      throw new Error("User is not authenticated");
    }
  },
);
