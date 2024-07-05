"use client";

import FeedbackItem from "./FeedbackItem";
import { useRealtimeFeedbackItem } from "./RealtimeFeedbackItemContext";

export default function RealtimeFeedbackItem() {
  const realtimeFeedbackItem = useRealtimeFeedbackItem();
  return <FeedbackItem feedbackItem={realtimeFeedbackItem} />;
}
