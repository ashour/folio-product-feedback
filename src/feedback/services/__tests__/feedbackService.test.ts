import { describe, expect, it } from "vitest";
import { FeedbackService } from "../feedbackService";
import { FakeFeedbackRepository } from "./FakeFeedbackRepository";
import { makeFeedback } from "./feedbackFactory";

describe("feedbackService", () => {
  it("fetches feedback", async () => {
    const withEmptyRepo = new FeedbackService(new FakeFeedbackRepository());

    const emptyFeedback = await withEmptyRepo.fetchFeedback();

    expect(emptyFeedback).toEqual([]);

    const feedbackItem0 = makeFeedback();
    const feedbackItem1 = makeFeedback();

    const withFeedbackRepo = new FeedbackService(
      new FakeFeedbackRepository([feedbackItem0, feedbackItem1]),
    );

    const feedback = await withFeedbackRepo.fetchFeedback();

    expect(feedback).toEqual([feedbackItem0, feedbackItem1]);
  });
});
