"use client";

import Button from "@/ui/Button";

import FormErrorMessage from "@/ui/FormErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CommentContentSchema,
  MAX_COMMENT_LENGTH,
  commentContentSchema,
} from "./comment-schemas";

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
  } = useForm<CommentContentSchema>({
    resolver: zodResolver(commentContentSchema),
    defaultValues: {
      content: "",
    },
  });

  const [charactersLeft, setCharactersLeft] = useState(MAX_COMMENT_LENGTH);
  const content = watch("content");
  useEffect(() => {
    setCharactersLeft(MAX_COMMENT_LENGTH - content.length);
  }, [content]);

  const onSubmit = async (data: CommentContentSchema) => {
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
        <span
          className={clsx(
            "text-body-4",
            charactersLeft < 0 ? "text-danger" : "text-slate-500",
          )}
        >
          {charactersLeft} Characters left
        </span>
        <Button type="submit" variant="purple">
          Post Comment
        </Button>
      </div>
    </form>
  );
}
