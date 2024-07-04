import { IFeedbackRepository } from "./IFeedbackRepository";
import { FeedbackRepository } from "./feedbackRepository";

let _feedbackService: FeedbackService | null;
export function feedbackService(): FeedbackService {
  if (!_feedbackService) {
    _feedbackService = new FeedbackService(new FeedbackRepository());
  }
  return _feedbackService;
}

export class FeedbackService {
  constructor(private feedbackRepository: IFeedbackRepository) {}

  async fetchFeedback() {
    return this.feedbackRepository.fetchFeedback();
  }
}
