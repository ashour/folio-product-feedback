import { Feedback } from "@prisma/client";

export interface IFeedbackRepository {
  all(): Promise<Feedback[]>;
}
