"use client";

import Form from "@/feedback/form/Form";
import { toast } from "react-toastify";
import { createFeedback } from "../actions/createFeedback";

export default function NewFeedbackForm() {
  return (
    <Form
      defaultValues={{
        title: "",
        category: "Feature",
        details: "",
      }}
      saveButtonText="Add Feedback"
      onSubmit={async (data, reset) => {
        toast("Adding feedback...");
        const [, error] = await createFeedback(data);

        if (error) {
          toast("Error: failed to add feedback", {
            autoClose: false,
            type: "error",
          });
          console.error(error);
          return;
        }

        reset();
        toast("Feedback added successfully");
      }}
    />
  );
}
