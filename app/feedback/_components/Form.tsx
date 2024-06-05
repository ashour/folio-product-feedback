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

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import HelpText from "./HelpText";
import Label from "./Label";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

export default function Form() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <form>
      <Label htmlFor="title" className="mb-1">
        Feedback Title
      </Label>
      <HelpText className="mb-4">Add a short, descriptive headline</HelpText>
      <input type="text" id="title" name="title" className="form-input mb-6" />

      <Field>
        <HuiLabel className="mb-1">
          <Label component="span">Category</Label>
        </HuiLabel>
        <HelpText className="mb-4">
          Choose a category for your feedback
        </HelpText>

        <Listbox
          value={selectedCategory}
          onChange={setSelectedCategory}
          name="category"
        >
          {({ open }) => (
            <>
              <ListboxButton className="form-input relative mb-6 flex w-full items-baseline justify-between text-left focus:outline-none focus:ring-[1px] focus:ring-blue">
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
                    className="shadow-listbox w-[var(--button-width)] origin-top rounded-10px [--anchor-gap:16px]"
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
      </Field>
    </form>
  );
}
