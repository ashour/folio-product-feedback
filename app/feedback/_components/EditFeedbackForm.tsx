"use client";

import { useRealtimeFeedbackItem } from "../_context/RealtimeFeedbackItemContext";
import { Category } from "../_lib/categories";
import { Status } from "../_lib/statuses";
import Form from "./Form";

export default function EditFeedbackForm() {
  const feedbackItem = useRealtimeFeedbackItem();

  return (
    <>
      <h1 className="mb-6 text-h3 ">Editing `{feedbackItem.title}`</h1>

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
    </>
  );
}
