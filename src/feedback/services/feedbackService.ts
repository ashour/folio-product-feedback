import { Feedback } from "@prisma/client";
import { FeedbackSchema } from "../schemas";
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

  private toZodType(feedback: Feedback): FeedbackSchema {
    return {
      ...feedback,
      category: feedback.category as FeedbackSchema["category"],
      status: feedback.status as FeedbackSchema["status"],
    };
  }
}
