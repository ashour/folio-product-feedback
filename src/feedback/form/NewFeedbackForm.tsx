import Form from "@/feedback/form/Form";
import { createFeedback } from "../actions/createFeedback";

export default function NewFeedbackForm() {
  return (
    <Form
      submitAction={createFeedback}
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
  );
}
