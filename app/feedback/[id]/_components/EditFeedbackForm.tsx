import { Feedback } from "@prisma/client";
import Form from "../../_components/Form";
import { Category } from "../../_lib/categories";
import { Status } from "../../_lib/statuses";

export default function EditFeedbackForm({
  feedbackItem,
}: {
  feedbackItem: Feedback;
}) {
  return (
    <Form
      submitUrl={`/api/feedback/${feedbackItem.id}`}
      submitMethod="PUT"
      toasts={{
        saving: "Saving feedback...",
        saved: "Feedback updated successfully",
        error: "Error: failed to update feedback",
      }}
      saveButtonText="Save Changes"
      defaultValues={{
        title: feedbackItem.title,
        category: feedbackItem.category as Category,
        details: feedbackItem.details,
        status: feedbackItem.status as Status,
      }}
      resetAfterSubmit={false}
      deleteUrl={`/api/feedback/${feedbackItem.id}`}
    />
  );
}
