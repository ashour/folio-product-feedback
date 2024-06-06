import { z } from "zod";
import { categories } from "../_lib/categories";

export const createFeedbackSchema = z.object({
  title: z.string().min(10, "Title must be 10 characters or more"),
  category: z.enum(categories),
  details: z.string().min(25, "Details must be 25 characters or more"),
});

export type CreateFeedbackSchema = z.infer<typeof createFeedbackSchema>;
