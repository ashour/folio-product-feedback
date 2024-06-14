import FormModal from "@/app/_components/FormModal";
import GradientIcon from "@/app/_components/icons/GradientIcon";
import IconPen from "@/app/_components/icons/IconPen";
import { FormModalStateProvider } from "@/app/_context/FormModalContext";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { mockLoggedInUser } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prismaSingleton";
import { notFound } from "next/navigation";
import EditFeedbackForm from "./_components/EditFeedbackForm";
import TopButtonBar from "./_components/TopButtonBar";

export default async function SingleFeedbackPage({
  params: { id },
}: {
  params: { id: string };
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
    <SimpleLayout className="mx-auto max-w-[540px]">
      <FormModalStateProvider>
        <TopButtonBar />
        <FormModal
          form={
            <>
              <GradientIcon className="absolute -top-5">
                <IconPen className="relative bottom-[0.5px] start-[1px]" />
              </GradientIcon>
              <h1 className="mb-6 text-h3 ">Editing `{feedbackItem.title}`</h1>
              <EditFeedbackForm feedbackItem={feedbackItem} />
            </>
          }
        >
          <main className="relative rounded-10px bg-white px-6 pb-6 pt-11"></main>
        </FormModal>
      </FormModalStateProvider>
    </SimpleLayout>
  );
}
