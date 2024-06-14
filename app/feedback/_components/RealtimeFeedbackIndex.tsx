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
            let updatedFeedbackItems = [...prevFeedbackItems];

            switch (payload.eventType) {
              case "INSERT":
                updatedFeedbackItems.unshift(payload.new as Feedback);
                break;

              case "UPDATE":
                const feedbackIndex = updatedFeedbackItems.findIndex(
                  (feedback) => feedback.id === payload.old.id,
                );
                updatedFeedbackItems[feedbackIndex] = payload.new as Feedback;
                break;

              case "DELETE":
                updatedFeedbackItems = updatedFeedbackItems.filter(
                  (feedback) => feedback.id !== payload.old.id,
                );
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
      {realtimeFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </section>
  );
}
