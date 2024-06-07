import { type Feedback } from "@prisma/client";
import ErrorAlert from "../_components/ErrorAlert";
import FeedbackItem from "../_components/FeedbackItem";
import NavLayout from "../_layout/NavLayout";
import EmptyState from "./_components/EmptyState";
import { fetchFeedback } from "./_lib/fetchFeedback";

export default async function Home() {
  let feedbackItems: Feedback[] | undefined;
  let error: string | undefined;

  try {
    feedbackItems = await fetchFeedback();
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <NavLayout>
      <main className="mx-6 mt-8">
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {feedbackItems?.length === 0 && <EmptyState />}

        {feedbackItems && feedbackItems.length > 0 && (
          <section className="flex flex-col gap-3 pb-14">
            {feedbackItems.map((feedback) => (
              <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
          </section>
        )}
      </main>
    </NavLayout>
  );
}
