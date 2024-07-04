"use client";

import FeedbackItem from "@/feedback/single/FeedbackItem";
import supabase from "@/lib/supabase/browserClient";
import { useEffect, useState } from "react";
import { FeedbackSchema } from "../schemas";

export default function RealtimeFeedbackIndex({
  feedbackItems,
}: {
  feedbackItems: FeedbackSchema[];
}) {
  const [realtimeFeedbackItems, setRealtimeFeedbackItems] =
    useState<FeedbackSchema[]>(feedbackItems);

  useEffect(() => {
    const channel = supabase
      .channel("feedback")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "feedbacks",
        },
        (payload) => {
          setRealtimeFeedbackItems((prevFeedbackItems) => {
            let updatedFeedbackItems = [...prevFeedbackItems];

            switch (payload.eventType) {
              case "INSERT":
                updatedFeedbackItems.unshift(payload.new as FeedbackSchema);
                break;

              case "UPDATE":
                const feedbackIndex = updatedFeedbackItems.findIndex(
                  (feedback) => feedback.id === payload.old.id,
                );
                updatedFeedbackItems[feedbackIndex] =
                  payload.new as FeedbackSchema;
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
