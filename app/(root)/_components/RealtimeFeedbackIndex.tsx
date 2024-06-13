"use client";

import FeedbackItem from "@/app/_components/FeedbackItem";
import supabase from "@/app/_lib/supabase/browserClient";
import { type Feedback } from "@prisma/client";
import { useEffect, useState } from "react";

export default function RealtimeFeedbackIndex({
  feedbackItems,
}: {
  feedbackItems: Feedback[];
}) {
  const [realtimeFeedbackItems, setRealtimeFeedbackItems] =
    useState<Feedback[]>(feedbackItems);

  useEffect(() => {
    const channel = supabase
      .channel("feedback")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "pfa_feedbacks",
        },
        (payload) => {
          setRealtimeFeedbackItems((prevFeedbackItems) => {
            const updatedFeedbackItems = [...prevFeedbackItems];
            const changedFeedback = payload.new as Feedback;

            const feedbackIndex = updatedFeedbackItems.findIndex(
              (feedback) => feedback.id === changedFeedback.id,
            );

            if (feedbackIndex !== -1) {
              updatedFeedbackItems[feedbackIndex] = changedFeedback;
            } else {
              updatedFeedbackItems.unshift(changedFeedback);
            }

            return updatedFeedbackItems;
          });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section className="flex flex-col gap-3 pb-14">
      {realtimeFeedbackItems.map((feedback) => (
        <FeedbackItem key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
}
