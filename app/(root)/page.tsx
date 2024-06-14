import FormModal from "@/app/_components/FormModal";
import GradientIcon from "@/app/_components/icons/GradientIcon";
import IconPlusSign from "@/app/_components/icons/IconPlusSign";
import { FormModalStateProvider } from "@/app/_context/FormModalContext";
import NavLayout from "@/app/_layout/NavLayout";
import { Suspense } from "react";
import FeedbackIndex from "./_components/FeedbackIndex";
import NewFeedbackForm from "./_components/NewFeedbackForm";
import TopControlBar from "./_components/TopControlBar";

export default async function Home() {
  return (
    <NavLayout>
      <FormModalStateProvider>
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
      </FormModalStateProvider>
    </NavLayout>
  );
}
