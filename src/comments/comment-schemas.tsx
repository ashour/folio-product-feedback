import { z } from "zod";

export const MAX_COMMENT_LENGTH = 20;

export const baseCommentSchema = z.object({
  content: z
    .string()
    .min(10, "Comment must be 10 characters or more")
    .max(MAX_COMMENT_LENGTH, "Comment must be 250 characters or less"),
});

export type BaseCommentSchema = z.infer<typeof baseCommentSchema>;

export const createCommentSchema = baseCommentSchema.extend({
  feedbackId: z.string(),
  authorId: z.string(),
  parentId: z.string().optional(),
});

export type CreateCommentSchema = z.infer<typeof createCommentSchema>;

export const commentSchema = createCommentSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CommentSchema = z.infer<typeof commentSchema>;
