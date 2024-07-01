"use client";

import { Feedback } from "@prisma/client";
import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../../_lib/supabase/browserClient";

const RealtimeFeedbackItemContext = createContext<{
  realtimeFeedbackItem: Feedback | null;
}>({ realtimeFeedbackItem: null });

export const RealtimeFeedbackItemProvider = ({
  feedbackItem,
  children,
}: {
  feedbackItem: Feedback;
  children: React.ReactNode;
}) => {
  const [realtimeFeedbackItem, setRealtimeFeedbackItem] =
    useState<Feedback>(feedbackItem);

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
            setRealtimeFeedbackItem(payload.new as Feedback);
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
