import { mockLoggedInUser } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prismaSingleton";
import { notFound } from "next/navigation";
import { Category } from "../_lib/categories";
import { Status } from "../_lib/statuses";
import Form from "./Form";

export default async function EditForm({
  id,
  cancelUrl,
}: {
  id: string;
  cancelUrl: string | undefined;
}) {
  const feedbackItem = await prisma.feedback.findFirst({
    where: { id },
  });

  if (!feedbackItem) {
    notFound();
  }

  if (feedbackItem.authorId !== (await mockLoggedInUser()).id) {
    notFound();
  }

  return (
    <>
      <h1 className="mb-6 text-h3 ">Editing `{feedbackItem.title}`</h1>

      <Form
        submitUrl={`/api/feedback/${id}`}
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
        deleteUrl={`/api/feedback/${id}`}
        cancelUrl={cancelUrl}
      />
    </>
  );
}
