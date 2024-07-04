"use server";

import { authenticated } from "@/auth/authenticated";
import { feedbackService } from "../services/feedbackService";

export const fetchFeedback = authenticated
  .createServerAction()
  .handler(async () => {
    return await feedbackService().fetchFeedback();
  });
