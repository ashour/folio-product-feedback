import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "../IFeedbackRepository";

export class FakeFeedbackRepository implements IFeedbackRepository {
  private _feedback: Feedback[];

  constructor(initialFeedback: Feedback[] = []) {
    this._feedback = initialFeedback;
  }

  all(): Promise<Feedback[]> {
    return Promise.resolve(this._feedback);
  }
}
