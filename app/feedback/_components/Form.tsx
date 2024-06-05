"use client";

import IconCheckmark from "@/app/_components/icons/IconCheckmark";
import IconChevronUp from "@/app/_components/icons/IconChevronUp";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { useState } from "react";

const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

export default function Form() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <form>
      <label
        htmlFor="title"
        className="mb-1 block cursor-pointer text-body-2 font-bold text-slate-600"
      >
        Feedback Title
      </label>
      <p className="mb-4 text-body-2 text-slate-500">
        Add a short, descriptive headline
      </p>
      <input
        type="text"
        id="title"
        name="title"
        className="rounded-5px text-body-2/1 mb-6 block w-full bg-slate-50 px-6 py-3  text-slate-600 focus:outline-none focus:ring-[1px] focus:ring-blue"
      />

      <label className="mb-1 block text-body-2 font-bold text-slate-600">
        Category
      </label>
      <p className="mb-4 text-body-2 text-slate-500">
        Choose a category for your feedback
      </p>

      <Listbox
        value={selectedCategory}
        onChange={setSelectedCategory}
        name="category"
      >
        <ListboxButton className="rounded-5px text-body-2/1 relative mb-6 flex w-full items-baseline  justify-between bg-slate-50 px-6 py-3 text-left text-slate-600 focus:outline-none focus:ring-[1px] focus:ring-blue">
          {selectedCategory}
          <IconChevronUp className="-scale-y-100" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="shadow-listbox mt-4 w-[276px] rounded-10px"
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
      </Listbox>
    </form>
  );
}
