"use server";

import { isAuthenticated } from "@/auth/isAuthenticated";
import { feedback } from "../services/feedbackService";

export const fetchFeedback = isAuthenticated
  .createServerAction()
  .handler(async () => await feedback().all());
