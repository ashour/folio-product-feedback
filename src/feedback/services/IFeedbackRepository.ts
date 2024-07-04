import { Feedback } from "@prisma/client";

export interface IFeedbackRepository {
  // todo return array of zod types insted of prisma types
  fetchFeedback(): Promise<Feedback[]>;
}
