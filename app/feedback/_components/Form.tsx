"use client";

import { Field, Label as HuiLabel } from "@headlessui/react";

import Button from "@/app/_components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import HelpText from "./HelpText";
import Label from "./Label";
import PfaListbox from "./PfaListbox";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"] as const;

const createFeedbackSchema = z.object({
  title: z.string().min(10, "Title must be 10 characters or more"),
  category: z.enum(categories),
  details: z.string().min(50, "Details must be 50 characters or more"),
});

type CreateFeedbackSchema = z.infer<typeof createFeedbackSchema>;

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
    console.log(data);
    // fetch("/api/feedback", {
    //   method: "POST",
    //   body: new FormData(e.currentTarget),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="title" className="mb-1">
        Feedback Title
      </Label>
      <HelpText className="mb-4">Add a short, descriptive headline</HelpText>
      <input className="form-input mb-6" id="title" {...register("title")} />
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
              options={categories}
              onChange={onChange}
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
        rows={5}
        className="form-input mb-10"
        id="details"
        {...register("details")}
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
