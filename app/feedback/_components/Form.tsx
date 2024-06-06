"use client";

import IconCheckmark from "@/app/_components/icons/IconCheckmark";
import IconChevronUp from "@/app/_components/icons/IconChevronUp";
import {
  Field,
  Label as HuiLabel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import Button from "@/app/_components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import HelpText from "./HelpText";
import Label from "./Label";

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
      <input {...register("title")} className="form-input mb-6" />
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
            <Listbox value={selectedCategory} onChange={onChange}>
              {({ open }) => (
                <>
                  <ListboxButton className="form-input relative flex w-full items-baseline justify-between text-left focus:outline-none focus:ring-[1px] focus:ring-blue">
                    {selectedCategory}
                    <IconChevronUp className="-scale-y-100" />
                  </ListboxButton>
                  <AnimatePresence>
                    {open && (
                      <ListboxOptions
                        static
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        anchor="bottom"
                        className="w-[var(--button-width)] origin-top rounded-10px shadow-listbox [--anchor-gap:16px]"
                      >
                        {categories.map((category) => (
                          <ListboxOption
                            key={category}
                            value={category}
                            className="group flex items-baseline justify-between border-b border-slate-600/15 bg-white px-6 py-3 text-body-1 text-slate-500 last:border-b-0 data-[focus]:cursor-pointer data-[focus]:text-purple-400"
                          >
                            {category}
                            <IconCheckmark className="invisible group-data-[selected]:visible" />
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Listbox>
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
        className="form-input mb-10"
        rows={5}
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
