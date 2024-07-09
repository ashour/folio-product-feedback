"use client";

import FeedbackForm from "@/feedback/form/Form";
import { toast } from "react-toastify";
import { createFeedback } from "../actions/createFeedback";

export default function NewFeedbackForm() {
  return (
    <FeedbackForm
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
        toast("Feedback added");
      }}
    />
  );
}
