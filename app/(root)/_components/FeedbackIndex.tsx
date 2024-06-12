import ErrorAlert from "@/app/_components/ErrorAlert";
import FeedbackItem from "@/app/_components/FeedbackItem";
import { Feedback } from "@prisma/client";
import { fetchFeedback } from "../_lib/fetchFeedback";
import EmptyState from "./EmptyState";

export default async function FeedbackIndex() {
  let feedbackItems: Feedback[] | undefined;
  let error: string | undefined;

  try {
    feedbackItems = await fetchFeedback();
  } catch (err) {
    error = (err as Error).message;
  }

  const hasFeedbackItems = feedbackItems && feedbackItems.length > 0;

  return (
    <>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!hasFeedbackItems && <EmptyState />}

      {hasFeedbackItems && (
        <section className="flex flex-col gap-3 pb-14">
          {feedbackItems!.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </section>
      )}
    </>
  );
}
