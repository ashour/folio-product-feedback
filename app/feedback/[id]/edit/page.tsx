import SimpleLayout from "@/app/_layout/SimpleLayout";
import { mockLoggedInUser } from "@/app/_lib/auth";
import db from "@/app/_lib/db";
import { notFound } from "next/navigation";
import Form from "../../_components/Form";
import GradientIcon from "../../_components/GradientIcon";
import { Category } from "../../_lib/categories";
import { Status } from "../../_lib/statuses";

export default async function EditFeedback({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const feedbackItem = await db.feedback.findFirst({
    where: { id: params.id },
  });

  if (!feedbackItem) {
    notFound();
  }

  if (feedbackItem.authorId !== (await mockLoggedInUser()).id) {
    notFound();
  }

  return (
    <SimpleLayout
      className="mx-auto max-w-[540px]"
      backUrl={searchParams?.backTo}
    >
      <main className="relative rounded-10px bg-white px-6 pb-6 pt-11">
        <GradientIcon className="absolute -top-5" />
        <h1 className="mb-6 text-h3 ">Editing `{feedbackItem.title}`</h1>

        <Form
          submitUrl={`/api/feedback/${params.id}`}
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
          cancelUrl={searchParams?.backTo}
        />
      </main>
    </SimpleLayout>
  );
}
