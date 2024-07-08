import ErrorAlert from "@/ui/ErrorAlert";
import { fetchFeedback } from "../actions/fetchFeedback";
import FeedbackItem from "../single/FeedbackItem";
import EmptyState from "./EmptyState";

export default async function FeedbackIndex() {
  const [feedbackItems, error] = await fetchFeedback();

  const hasFeedbackItems = feedbackItems && feedbackItems.length > 0;

  return (
    <>
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      {!error && !hasFeedbackItems && <EmptyState />}

      {hasFeedbackItems && (
        <section className="flex flex-col gap-3 pb-14">
          {feedbackItems.map((feedbackItem) => (
            <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
          ))}
        </section>
      )}
    </>
  );
}
