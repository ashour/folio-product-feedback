import { z } from "zod";
import { categories } from "./categories";
import { statuses } from "./statuses";

export const feedbackSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(10, "Title must be 10 characters or more"),
  category: z.enum(categories),
  status: z.optional(z.enum(statuses)),
  details: z.string().min(25, "Details must be 25 characters or more"),
  authorId: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
