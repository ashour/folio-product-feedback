import ErrorAlert from "@/app/_components/ErrorAlert";
import { Feedback } from "@prisma/client";
import { fetchFeedback } from "../_actions/fetchFeedback";
import EmptyState from "./EmptyState";
import RealtimeFeedbackIndex from "./RealtimeFeedbackIndex";

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
        <RealtimeFeedbackIndex feedbackItems={feedbackItems!} />
      )}
    </>
  );
}
