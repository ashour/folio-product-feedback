import { z } from "zod";
import { categories } from "../_lib/categories";
import { statuses } from "../_lib/statuses";

export const feedbackSchema = z.object({
  title: z.string().min(10, "Title must be 10 characters or more"),
  category: z.enum(categories),
  status: z.optional(z.enum(statuses)),
  details: z.string().min(25, "Details must be 25 characters or more"),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
