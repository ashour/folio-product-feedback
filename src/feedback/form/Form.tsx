"use client";

import Button from "@/ui/Button";
import HelpText from "@/ui/HelpText";
import Label from "@/ui/Label";
import PfaListbox from "@/ui/PfaListbox";
import { useModalContext } from "@/ui/modals/ModalContext";
import { Field, Label as HuiLabel } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Controller, UseFormReset, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { categories } from "../categories";
import { FeedbackSchema, feedbackSchema } from "../schemas";
import { statuses } from "../statuses";

type FormProps = {
  defaultValues?: FeedbackSchema;
  onSubmit: (
    data: FeedbackSchema,
    reset: UseFormReset<FeedbackSchema>,
  ) => Promise<any>;
  deleteAction?: () => Promise<any>;
  saveButtonText: string;
};

export default function Form({
  defaultValues,
  onSubmit,
  deleteAction,
  saveButtonText,
}: FormProps) {
  const { setIsModalOpen } = useModalContext();

  const {
    watch,
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackSchema>({
    resolver: zodResolver(feedbackSchema),
    defaultValues,
  });

  const selectedCategory = watch("category");
  const selectedStatus = watch("status");

  const router = useRouter();

  const onDelete = async () => {
    toast("Deleting feedback...");
    const [, error] = await deleteAction!();

    if (error) {
      toast("Error: failed to delete feedback", {
        autoClose: false,
        type: "error",
      });
      console.error(error);
      return;
    }

    setCookie("__flash__", "Feedback deleted", {
      maxAge: 5,
      sameSite: "strict",
    });
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(async (data) => await onSubmit(data, reset))}>
      <Label htmlFor="title" className="mb-1">
        Feedback Title
      </Label>
      <HelpText className="mb-4">Add a short, descriptive headline</HelpText>
      <input
        {...register("title")}
        id="title"
        className={clsx("form-input", errors.title && "form-input--error")}
      />
      {errors.title && (
        <p className="mt-1 text-body-2 text-danger">{errors.title.message}</p>
      )}

      <Field className="mt-6">
        <HuiLabel className="mb-1">
          <Label component="span">Category</Label>
        </HuiLabel>
        <HelpText className="mb-4">
          Choose a category for your feedback
        </HelpText>

        <Controller
          name="category"
          control={control}
          render={({ field: { onChange } }) => (
            <PfaListbox
              onChange={onChange}
              options={categories}
              value={selectedCategory}
            />
          )}
        />
      </Field>

      {defaultValues?.status && (
        <Field className="mt-6">
          <HuiLabel className="mb-1">
            <Label component="span">Update status</Label>
          </HuiLabel>
          <HelpText className="mb-4">Change feature state</HelpText>

          <Controller
            name="status"
            control={control}
            render={({ field: { onChange } }) => (
              <PfaListbox
                onChange={onChange}
                options={statuses}
                value={selectedStatus!}
              />
            )}
          />
        </Field>
      )}

      <Label htmlFor="details" className="mb-1 mt-6">
        Feedback Detail
      </Label>
      <HelpText className="mb-4">
        Include any specific comments on what should be improved, added, etc.
      </HelpText>
      <textarea
        {...register("details")}
        rows={5}
        id="details"
        className={clsx("form-input", errors.details && "form-input--error")}
      ></textarea>
      {errors.details && (
        <p className="mt-1 text-body-2 text-danger">{errors.details.message}</p>
      )}

      <div className="mt-10 flex flex-col gap-4 md:flex-row-reverse">
        <Button type="submit" variant="purple" disabled={isSubmitting}>
          {saveButtonText}
        </Button>
        <Button
          type="button"
          variant="slate"
          disabled={isSubmitting}
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
        {!!deleteAction && (
          <Button
            type="button"
            variant="danger"
            onClick={() =>
              confirm("Are you sure you want to delete this?") && onDelete()
            }
            className="md:me-auto"
          >
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
