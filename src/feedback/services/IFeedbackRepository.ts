import { Feedback } from "@prisma/client";

export interface IFeedbackRepository {
  all(): Promise<Feedback[]>;
  findById(id: string): Promise<Feedback | null>;
  create(feedback: Feedback): Promise<void>;
  update(id: string, feedback: Feedback): Promise<void>;
  delete(id: string): Promise<void>;
}
