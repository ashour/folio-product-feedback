import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  fullName: z.string(),
  avatar: z.string().url(),
});
