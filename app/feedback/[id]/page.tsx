import FormModal from "@/app/_components/FormModal";
import GradientIcon from "@/app/_components/icons/GradientIcon";
import IconPen from "@/app/_components/icons/IconPen";
import { ModalStateProvider } from "@/app/_context/ModalContext";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { mockLoggedInUser } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prismaSingleton";
import { notFound } from "next/navigation";
import EditFeedbackForm from "../_components/EditFeedbackForm";
import RealtimeFeedbackItem from "../_components/RealtimeFeedbackItem";
import { RealtimeFeedbackItemProvider } from "../_context/RealtimeFeedbackItemContext";
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

  const user = await mockLoggedInUser();
  const displayEditButton = feedbackItem.authorId === user.id;

  return (
    <SimpleLayout className="mx-auto max-w-[689px] lg:max-w-[730px]">
      <ModalStateProvider>
        <TopButtonBar displayEditButton={displayEditButton} />

        <RealtimeFeedbackItemProvider feedbackItem={feedbackItem}>
          <FormModal
            form={
              <>
                <GradientIcon className="absolute -top-5">
                  <IconPen className="relative bottom-[0.5px] start-[1px]" />
                </GradientIcon>
                <EditFeedbackForm />
              </>
            }
          >
            <main>
              <RealtimeFeedbackItem />
            </main>
          </FormModal>
        </RealtimeFeedbackItemProvider>
      </ModalStateProvider>
    </SimpleLayout>
  );
}
