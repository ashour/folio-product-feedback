import { auth } from "@/auth/authService";
import EditFeedbackForm from "@/feedback/form/EditFeedbackForm";
import { feedback } from "@/feedback/services/feedbackService";
import RealtimeFeedbackItem from "@/feedback/single/RealtimeFeedbackItem";
import { RealtimeFeedbackItemProvider } from "@/feedback/single/RealtimeFeedbackItemContext";
import GradientIcon from "@/ui/icons/GradientIcon";
import IconPen from "@/ui/icons/IconPen";
import SimpleLayout from "@/ui/layout/SimpleLayout";
import TopButtonBar from "@/ui/layout/TopButtonBar";
import FormModal from "@/ui/modals/FormModal";
import { ModalStateProvider } from "@/ui/modals/ModalContext";
import { notFound } from "next/navigation";

export default async function SingleFeedbackPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const feedbackItem = await feedback().findById(id);

  if (!feedbackItem) {
    notFound();
  }

  const user = await auth().currentUser();
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
