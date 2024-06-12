"use client";

import Button from "@/app/_components/Button";
import IconCross from "@/app/_components/icons/IconCross";
import { Field, Label as HuiLabel } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { categories } from "../_lib/categories";
import { statuses } from "../_lib/statuses";
import { FeedbackSchema, feedbackSchema } from "../_validation/schemas";
import HelpText from "./HelpText";
import Label from "./Label";
import PfaListbox from "./PfaListbox";

type FormProps = {
  toasts: {
    saving: string;
    saved: string;
    error: string;
  };
  submitUrl: string;
  submitMethod: "POST" | "PUT";
  cancelUrl?: string;
  deleteUrl?: string;
  saveButtonText: string;
  resetAfterSubmit: boolean;
  defaultValues?: FeedbackSchema;
};

export default function Form({
  toasts,
  cancelUrl,
  deleteUrl,
  submitUrl,
  submitMethod,
  defaultValues,
  saveButtonText,
  resetAfterSubmit,
}: FormProps) {
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

  const onSubmit: SubmitHandler<FeedbackSchema> = async (data) => {
    toast(toasts.saving);
    try {
      const result = await fetch(submitUrl, {
        method: submitMethod,
        body: JSON.stringify(data),
      });
      if (result.ok) {
        if (resetAfterSubmit) {
          reset();
        }
        toast(toasts.saved);
      } else {
        toast(toasts.error, {
          autoClose: false,
          type: "error",
        });
      }
    } catch (error) {
      toast(toasts.error, {
        autoClose: false,
        type: "error",
      });
      console.error(error);
    }
  };

  const onDelete = async () => {
    toast("Deleting feedback...");
    try {
      const result = await fetch(deleteUrl!, { method: "DELETE" });
      if (result.ok) {
        toast("Feedback deleted successfully");
      } else {
        toast("Error: failed to delete feedback", {
          autoClose: false,
          type: "error",
        });
      }
    } catch (error) {
      toast("Error: failed to delete feedback", {
        autoClose: false,
        type: "error",
      });
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer
        icon={false}
        closeOnClick
        stacked={true}
        hideProgressBar
        position="bottom-center"
        toastClassName={(ctx) =>
          clsx(
            "py-4 px-8 md:p-4 rounded-10px shadow-md text-white cursor-pointer flex justify-between items-center",
            {
              "bg-sky": !ctx || !ctx.type || ctx.type === "default",
              "bg-danger": ctx?.type === "error",
            },
          )
        }
        bodyClassName={() =>
          "text-white stroke-white flex-1 flex justify-between"
        }
        closeButton={
          <div className="flex h-6 w-6 items-center justify-center">
            <IconCross />
          </div>
        }
      />

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
          as={Link}
          type="button"
          variant="slate"
          href={cancelUrl || "/"}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        {!deleteUrl ? null : (
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
