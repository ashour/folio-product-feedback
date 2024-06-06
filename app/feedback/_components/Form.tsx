"use client";

import Button from "@/app/_components/Button";
import { Field, Label as HuiLabel } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { categories } from "../_lib/categories";
import {
  createFeedbackSchema,
  type CreateFeedbackSchema,
} from "../_validation/createFeedbackSchema";
import HelpText from "./HelpText";
import Label from "./Label";
import PfaListbox from "./PfaListbox";

export default function Form() {
  const router = useRouter();
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFeedbackSchema>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      category: categories[0],
    },
  });

  const selectedCategory = watch("category");

  function backToPrevPage() {
    router.back();
  }

  const onSubmit: SubmitHandler<CreateFeedbackSchema> = (data) => {
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="title" className="mb-1">
        Feedback Title
      </Label>
      <HelpText className="mb-4">Add a short, descriptive headline</HelpText>
      <input {...register("title")} id="title" className="form-input mb-6" />
      {errors.title && <span>{errors.title.message}</span>}

      <Field className="mb-6">
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

      <Label htmlFor="details" className="mb-1">
        Feedback Detail
      </Label>
      <HelpText className="mb-4">
        Include any specific comments on what should be improved, added, etc.
      </HelpText>
      <textarea
        {...register("details")}
        rows={5}
        id="details"
        className="form-input mb-10"
      ></textarea>
      {errors.details && <span>{errors.details.message}</span>}

      <div className="flex flex-col gap-4 md:flex-row-reverse">
        <Button type="submit" variant="purple">
          Add Feedback
        </Button>
        <Button type="button" variant="slate" onClick={backToPrevPage}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
