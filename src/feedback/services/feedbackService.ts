import { Feedback } from "@prisma/client";
import { FeedbackSchema } from "../feedback-schemas";
import { IFeedbackRepository } from "./IFeedbackRepository";
import { FeedbackRepository } from "./feedbackRepository";

let _feedbackService: FeedbackService | null;
export function feedback(): FeedbackService {
  if (!_feedbackService) {
    _feedbackService = new FeedbackService(new FeedbackRepository());
  }
  return _feedbackService;
}

export class FeedbackService {
  constructor(private feedbackRepository: IFeedbackRepository) {}

  async all(): Promise<FeedbackSchema[]> {
    return (await this.feedbackRepository.all()).map(this.toZodType);
  }

  async findById(id: string): Promise<FeedbackSchema | null> {
    const feedback = await this.feedbackRepository.findById(id);
    return feedback ? this.toZodType(feedback) : null;
  }

  async findAndGuardForOwner(
    userId: string,
    feedbackId: string,
  ): Promise<FeedbackSchema> {
    const feedback = await this.feedbackRepository.findById(feedbackId);
    if (!feedback) {
      throw new Error("Feedback not found");
    }

    if (feedback.authorId !== userId) {
      throw new Error("You are not authorized to update this feedback");
    }

    return feedback as FeedbackSchema;
  }

  async create(feedback: FeedbackSchema): Promise<void> {
    return this.feedbackRepository.create(feedback as Feedback);
  }

  async update(id: string, feedback: FeedbackSchema): Promise<void> {
    return this.feedbackRepository.update(id, feedback as Feedback);
  }

  async delete(id: string): Promise<void> {
    return this.feedbackRepository.delete(id);
  }

  private toZodType(feedback: Feedback): FeedbackSchema {
    return {
      ...feedback,
      category: feedback.category as FeedbackSchema["category"],
      status: feedback.status as FeedbackSchema["status"],
    };
  }
}
