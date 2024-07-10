"use client";

import Button from "@/ui/Button";

import FormErrorMessage from "@/ui/FormErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { baseCommentSchema, BaseCommentSchema } from "./comment-schemas";

type CommentFormProps = {
  feedbackId: string;
  parentId?: string;
};

export default function CommentForm({
  feedbackId,
  parentId,
}: CommentFormProps) {
  const {
    watch,
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BaseCommentSchema>({
    resolver: zodResolver(baseCommentSchema),
  });

  const onSubmit = async (data: BaseCommentSchema) => {
    console.log("onSubmit");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-10px bg-white p-6"
    >
      <h3 className="mb-6 text-h3">Add Comment</h3>

      <textarea
        rows={4}
        placeholder="Type your comment here"
        className={clsx(
          "form-input placeholder:text-slate-300",
          errors.content && "form-input--error",
        )}
        {...register("content")}
      ></textarea>
      <FormErrorMessage fieldError={errors.content} />

      <div className="mt-4 flex items-center justify-between">
        <span className="text-body-4 text-slate-500">250 Characters left</span>
        <Button type="submit" variant="purple">
          Post Comment
        </Button>
      </div>
    </form>
  );
}
