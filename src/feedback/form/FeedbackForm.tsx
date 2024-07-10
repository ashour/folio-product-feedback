"use client";

import Button from "@/ui/Button";
import FormErrorMessage from "@/ui/FormErrorMessage";
import HelpText from "@/ui/HelpText";
import Label from "@/ui/Label";
import PfaListbox from "@/ui/PfaListbox";
import { useModalContext } from "@/ui/modals/ModalContext";
import { Field, Label as HuiLabel } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Controller, UseFormReset, useForm } from "react-hook-form";
import { categories } from "../categories";
import { FeedbackSchema, feedbackSchema } from "../feedback-schemas";
import { statuses } from "../statuses";

type FormProps = {
  defaultValues?: FeedbackSchema;
  saveButtonText: string;
  onSubmit: (
    data: FeedbackSchema,
    reset: UseFormReset<FeedbackSchema>,
  ) => Promise<any>;
  extraButtons?: React.ReactNode;
};

export default function FeedbackForm({
  defaultValues,
  saveButtonText,
  onSubmit,
  extraButtons,
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
      <FormErrorMessage fieldError={errors.title} />

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
      <FormErrorMessage fieldError={errors.details} />

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
        {extraButtons}
      </div>
    </form>
  );
}
