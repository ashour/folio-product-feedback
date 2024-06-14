"use client";

import IconPlusSign from "@/app/_components/icons/IconPlusSign";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import Form from "@/app/feedback/_components/Form";
import GradientIcon from "@/app/feedback/_components/GradientIcon";
import { useEffect } from "react";
import { useFormModalContext } from "../_context/FormModalContext";

export default function FormModal({ children }: { children: React.ReactNode }) {
  const { isOpen } = useFormModalContext();

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
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-20 overflow-hidden bg-slate-50">
          <SimpleLayout className="mx-auto max-w-[540px]">
            <section className="relative rounded-10px bg-white px-6 pb-6 pt-11">
              <GradientIcon className="absolute -top-5">
                <IconPlusSign />
              </GradientIcon>
              <h1 className="mb-6 text-h3 ">Create New Feedback</h1>

              <Form
                submitUrl="/api/feedback"
                submitMethod="POST"
                toasts={{
                  saving: "Adding feedback...",
                  saved: "Feedback added successfully",
                  error: "Error: failed to add feedback",
                }}
                saveButtonText="Add Feedback"
                defaultValues={{
                  title: "",
                  category: "Feature",
                  details: "",
                }}
                resetAfterSubmit
              />
            </section>
          </SimpleLayout>
        </div>
      )}
      {children}
    </div>
  );
}
