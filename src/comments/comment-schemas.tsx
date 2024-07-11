import { userSchema } from "@/auth/user-schemas";
import { z } from "zod";

export const MAX_COMMENT_LENGTH = 20;

export const commentContentSchema = z.object({
  content: z
    .string()
    .min(10, "Comment must be 10 characters or more")
    .max(MAX_COMMENT_LENGTH, "Comment must be 250 characters or less"),
});

export type CommentContentSchema = z.infer<typeof commentContentSchema>;

export const createCommentSchema = commentContentSchema.extend({
  feedbackId: z.string(),
  authorId: z.string(),
  parentId: z.string().optional(),
});

export type CreateCommentSchema = z.infer<typeof createCommentSchema>;

export const baseCommentSchema = createCommentSchema.extend({
  id: z.string(),
  author: userSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type BaseCommentSchema = z.infer<typeof baseCommentSchema>;

export type CommentSchema = BaseCommentSchema & {
  replies: BaseCommentSchema[];
};

export const commentSchema: z.ZodType<CommentSchema> = baseCommentSchema.extend(
  {
    replies: z.lazy(() => z.array(commentSchema)),
  },
);
