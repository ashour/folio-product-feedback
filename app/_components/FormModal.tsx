"use client";

import BackButton from "@/app/_layout/BackButton";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { useEffect } from "react";
import { useFormModalContext } from "../_context/FormModalContext";

export default function FormModal({
  form,
  children,
}: {
  form: React.ReactNode;
  children: React.ReactNode;
}) {
  const { isOpen, setIsOpen } = useFormModalContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 overflow-auto bg-slate-50">
          <SimpleLayout className="mx-auto max-w-[540px]">
            <div className="mb-9 flex h-10 items-center">
              <BackButton onClick={() => setIsOpen(false)} />
            </div>
            <section className="relative rounded-10px bg-white px-6 pb-6 pt-11">
              {form}
            </section>
          </SimpleLayout>
        </div>
      )}

      {children}
    </>
  );
}
