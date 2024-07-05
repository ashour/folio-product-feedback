"use client";

import { toast } from "react-toastify";
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
        saveButtonText="Save Changes"
        defaultValues={{
          title: feedbackItem.title,
          category: feedbackItem.category as Category,
          details: feedbackItem.details,
          status: feedbackItem.status as Status,
        }}
        onSubmit={async (data) => {
          toast("Saving feedback...");
          const [, error] = await updateFeedback({
            feedbackId: feedbackItem.id!,
            data,
          });

          if (error) {
            toast("Error: failed to update feedback", {
              autoClose: false,
              type: "error",
            });
            console.error(error);
            return;
          }

          toast("Feedback updated successfully");
        }}
        deleteAction={() => deleteFeedback({ feedbackId: feedbackItem.id! })}
      />
    </>
  );
}
