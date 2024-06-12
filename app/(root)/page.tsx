import { Suspense } from "react";
import NavLayout from "../_layout/NavLayout";
import FeedbackIndex from "./_components/FeedbackIndex";
import TopControlBar from "./_components/TopControlBar";

export default async function Home() {
  return (
    <NavLayout>
      <TopControlBar />

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
    </NavLayout>
  );
}
