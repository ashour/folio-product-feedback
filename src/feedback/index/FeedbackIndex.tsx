import ErrorAlert from "@/ui/ErrorAlert";
import { fetchFeedback } from "../actions/fetchFeedback";
import EmptyState from "./EmptyState";
import RealtimeFeedbackIndex from "./RealtimeFeedbackIndex";

export default async function FeedbackIndex() {
  const [feedbackItems, error] = await fetchFeedback();

  const hasFeedbackItems = feedbackItems && feedbackItems.length > 0;

  return (
    <>
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      {!error && !hasFeedbackItems && <EmptyState />}

      {hasFeedbackItems && (
        <RealtimeFeedbackIndex feedbackItems={feedbackItems!} />
      )}
    </>
  );
}
