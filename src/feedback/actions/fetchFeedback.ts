"use server";

import { authenticated } from "@/auth/authenticated";
import { feedback } from "../services/feedbackService";

export const fetchFeedback = authenticated
  .createServerAction()
  .handler(async () => await feedback().all());
