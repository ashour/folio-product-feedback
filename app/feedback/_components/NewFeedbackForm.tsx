import Form from "@/app/feedback/_components/Form";

export default function NewFeedbackForm() {
  return (
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
  );
}
