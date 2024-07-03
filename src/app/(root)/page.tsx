import NewFeedbackForm from "@/feedback/form/NewFeedbackForm";
import FeedbackIndex from "@/feedback/index/FeedbackIndex";
import GradientIcon from "@/ui/icons/GradientIcon";
import IconPlusSign from "@/ui/icons/IconPlusSign";
import NavLayout from "@/ui/layout/NavLayout";
import TopControlBar from "@/ui/layout/TopControlBar";
import FormModal from "@/ui/modals/FormModal";
import { ModalStateProvider } from "@/ui/modals/ModalContext";
import { Suspense } from "react";

export default async function Home() {
  return (
    <NavLayout>
      <ModalStateProvider>
        <TopControlBar />

        <FormModal
          form={
            <>
              <GradientIcon className="absolute -top-5">
                <IconPlusSign />
              </GradientIcon>
              <h1 className="mb-6 text-h3 ">Create New Feedback</h1>
              <NewFeedbackForm />
            </>
          }
        >
          <main className="mx-6 mt-8 md:mx-0 lg:mt-6">
            <Suspense
              fallback={
                <div className="rounded-10px bg-white py-3 text-center text-slate-600">
                  Loading feedback...
                </div>
              }
            >
              <FeedbackIndex />
            </Suspense>
          </main>
        </FormModal>
      </ModalStateProvider>
    </NavLayout>
  );
}
