"use client";

import { deleteFeedback } from "../actions/deleteFeedback";
import { updateFeedback } from "../actions/updateFeedback";
import { type Category } from "../categories";
import { useRealtimeFeedbackItem } from "../single/RealtimeFeedbackItemContext";
import { type Status } from "../statuses";
import Form from "./Form";

export default function EditFeedbackForm() {
  const feedbackItem = useRealtimeFeedbackItem();

  return (
    <>
      <h1 className="mb-6 text-h3 ">Editing `{feedbackItem.title}`</h1>

      <Form
        submitAction={(data) =>
          updateFeedback({ feedbackId: feedbackItem.id!, data })
        }
        deleteAction={() => deleteFeedback({ feedbackId: feedbackItem.id! })}
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
      />
    </>
  );
}
