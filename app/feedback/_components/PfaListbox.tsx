import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import IconCheckmark from "../../_components/icons/IconCheckmark";
import IconChevronUp from "../../_components/icons/IconChevronUp";

type PfaListboxProps = {
  onChange: (value: any) => void;
  value: string;
  options: Readonly<string[]>;
};

export default function PfaListbox({
  onChange,
  value,
  options,
}: PfaListboxProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <ListboxButton className="form-input relative flex w-full items-baseline justify-between text-left focus:outline-none focus:ring-[1px] focus:ring-blue">
            {value}
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
                {options.map((option) => (
                  <ListboxOption
                    key={option}
                    value={option}
                    className="group flex items-baseline justify-between border-b border-slate-600/15 bg-white px-6 py-3 text-body-1 text-slate-500 last:border-b-0 data-[focus]:cursor-pointer data-[focus]:text-purple-400"
                  >
                    {option}
                    <IconCheckmark className="invisible group-data-[selected]:visible" />
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  );
}
