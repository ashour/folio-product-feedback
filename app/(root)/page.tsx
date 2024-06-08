import { type Feedback } from "@prisma/client";
import ErrorAlert from "../_components/ErrorAlert";
import FeedbackItem from "../_components/FeedbackItem";
import NavLayout from "../_layout/NavLayout";
import EmptyState from "./_components/EmptyState";
import TopControlBar from "./_components/TopControlBar";
import { fetchFeedback } from "./_lib/fetchFeedback";

export default async function Home() {
  let feedbackItems: Feedback[] | undefined;
  let error: string | undefined;

  try {
    feedbackItems = await fetchFeedback();
  } catch (err) {
    error = (err as Error).message;
  }

  const hasFeedbackItems = feedbackItems && feedbackItems.length > 0;

  return (
    <NavLayout>
      <TopControlBar />

      <main className="mx-6 mt-8 md:mx-0 lg:mt-6">
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {!hasFeedbackItems && <EmptyState />}

        {hasFeedbackItems && (
          <section className="flex flex-col gap-3 pb-14">
            {feedbackItems!.map((feedback) => (
              <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
          </section>
        )}
      </main>
    </NavLayout>
  );
}
