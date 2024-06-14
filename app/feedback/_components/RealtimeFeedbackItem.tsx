"use client";

import FeedbackItem from "@/app/_components/FeedbackItem";
import { useRealtimeFeedbackItem } from "../_context/RealtimeFeedbackItemContext";

export default function RealtimeFeedbackItem() {
  const realtimeFeedbackItem = useRealtimeFeedbackItem();
  return <FeedbackItem feedbackItem={realtimeFeedbackItem} />;
}
