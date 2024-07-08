"use client";

import Button from "@/ui/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { deleteFeedback } from "../actions/deleteFeedback";
import { updateFeedback } from "../actions/updateFeedback";
import { type Category } from "../categories";
import { FeedbackSchema } from "../schemas";
import { type Status } from "../statuses";
import Form from "./Form";

export default function EditFeedbackForm({
  feedbackItem,
}: {
  feedbackItem: FeedbackSchema;
}) {
  const router = useRouter();

  const onDelete = async () => {
    toast("Deleting feedback...");
    const [, error] = await deleteFeedback({ feedbackId: feedbackItem.id! });

    if (error) {
      toast("Error: failed to delete feedback", {
        autoClose: false,
        type: "error",
      });
      console.error(error);
      return;
    }

    toast("Feedback deleted");
    router.push("/");
  };

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
            toast("Error: failed to saved feedback", {
              autoClose: false,
              type: "error",
            });
            console.error(error);
            return;
          }

          toast("Feedback saved");
        }}
        extraButtons={
          <Button
            type="button"
            variant="danger"
            onClick={() =>
              confirm("Are you sure you want to delete this?") && onDelete()
            }
            className="md:me-auto"
          >
            Delete
          </Button>
        }
      />
    </>
  );
}
