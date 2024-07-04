"use client";

import supabase from "@/lib/supabase/browserClient";
import { createContext, useContext, useEffect, useState } from "react";
import { FeedbackSchema } from "../schemas";

const RealtimeFeedbackItemContext = createContext<{
  realtimeFeedbackItem: FeedbackSchema | null;
}>({ realtimeFeedbackItem: null });

export const RealtimeFeedbackItemProvider = ({
  feedbackItem,
  children,
}: {
  feedbackItem: FeedbackSchema;
  children: React.ReactNode;
}) => {
  const [realtimeFeedbackItem, setRealtimeFeedbackItem] =
    useState<FeedbackSchema>(feedbackItem);

  useEffect(() => {
    const channel = supabase
      .channel("feedback")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "feedbacks",
        },
        (payload) => {
          if (payload.new.id === feedbackItem.id) {
            setRealtimeFeedbackItem(payload.new as FeedbackSchema);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [feedbackItem.id]);

  return (
    <RealtimeFeedbackItemContext.Provider value={{ realtimeFeedbackItem }}>
      {children}
    </RealtimeFeedbackItemContext.Provider>
  );
};

export const useRealtimeFeedbackItemContext = () => {
  return useContext(RealtimeFeedbackItemContext);
};

export const useRealtimeFeedbackItem = () => {
  return useContext(RealtimeFeedbackItemContext).realtimeFeedbackItem!;
};
