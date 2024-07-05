import { Feedback } from "@prisma/client";
import { IFeedbackRepository } from "../IFeedbackRepository";

export class FakeFeedbackRepository implements IFeedbackRepository {
  private _feedback: Feedback[];

  constructor(initialFeedback: Feedback[] = []) {
    this._feedback = initialFeedback;
  }

  create(feedback: Feedback): Promise<void> {
    this._feedback.push(feedback);
    return Promise.resolve();
  }

  all(): Promise<Feedback[]> {
    return Promise.resolve(this._feedback);
  }

  findById(id: string): Promise<Feedback | null> {
    return Promise.resolve(this._feedback.find((f) => f.id === id) || null);
  }

  update(id: string, feedback: Feedback): Promise<void> {
    const index = this._feedback.findIndex((f) => f.id === id);
    this._feedback[index] = feedback;
    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    this._feedback = this._feedback.filter((f) => f.id !== id);
    return Promise.resolve();
  }
}
