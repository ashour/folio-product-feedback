"use client";

import BackButton from "@/app/_layout/BackButton";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { useEffect } from "react";
import { useModalContext } from "../_context/ModalContext";

export default function FormModal({
  form,
  children,
}: {
  form: React.ReactNode;
  children: React.ReactNode;
}) {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-20 overflow-auto overscroll-contain bg-slate-50">
          <SimpleLayout className="mx-auto max-w-[540px]">
            <div className="mb-9 flex h-10 items-center">
              <BackButton onClick={() => setIsModalOpen(false)} />
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
