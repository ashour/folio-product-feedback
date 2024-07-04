import { FeedbackSchema } from "@/feedback/schemas";
import { Feedback } from "@prisma/client";
import { describe, expect, it } from "vitest";
import { FeedbackService } from "../feedbackService";
import { FakeFeedbackRepository } from "./FakeFeedbackRepository";
import { makeFeedback } from "./feedbackFactory";

describe("feedbackService", () => {
  it("fetches all feedback", async () => {
    const withEmptyRepo = new FeedbackService(new FakeFeedbackRepository());

    const emptyFeedback = await withEmptyRepo.all();

    expect(emptyFeedback).toEqual([]);

    const feedbackItem0 = makeFeedback<Feedback>();
    const feedbackItem1 = makeFeedback<Feedback>();

    const withFeedbackRepo = new FeedbackService(
      new FakeFeedbackRepository([feedbackItem0, feedbackItem1]),
    );

    const feedback = await withFeedbackRepo.all();

    expect(feedback).toEqual([feedbackItem0, feedbackItem1]);
  });

  it("fetches a single feedback by id", async () => {
    const feedbackItem0 = makeFeedback<FeedbackSchema>({ id: "1" });
    const feedbackItem1 = makeFeedback<FeedbackSchema>({ id: "2" });
    const feedbackRepo = new FakeFeedbackRepository([
      feedbackItem0 as Feedback,
      feedbackItem1 as Feedback,
    ]);
    const feedbackService = new FeedbackService(feedbackRepo);

    const feedback = await feedbackService.findById("1");

    expect(feedback).toEqual(feedbackItem0);
  });

  it("ensures a user owns a feedback item", async () => {
    const feedbackItem = makeFeedback<FeedbackSchema>({
      id: "1",
      authorId: "1",
    });
    const feedbackRepo = new FakeFeedbackRepository([feedbackItem as Feedback]);
    const feedbackService = new FeedbackService(feedbackRepo);

    const authorizedFeedbackItem = await feedbackService.findAndGuardForOwner(
      "1",
      "1",
    );

    expect(authorizedFeedbackItem).toBe(feedbackItem);

    expect(async () =>
      feedbackService.findAndGuardForOwner("1", "2"),
    ).rejects.toThrow("Feedback not found");

    expect(async () =>
      feedbackService.findAndGuardForOwner("2", "1"),
    ).rejects.toThrow("You are not authorized to update this feedback");
  });

  it("creates feedback", async () => {
    const feedbackRepo = new FakeFeedbackRepository();
    const feedbackService = new FeedbackService(feedbackRepo);

    const feedback0 = makeFeedback<FeedbackSchema>();
    await feedbackService.create(feedback0);

    expect(await feedbackRepo.all()).toEqual([feedback0]);

    const feedback1 = makeFeedback<FeedbackSchema>();
    await feedbackService.create(feedback1);

    expect(await feedbackRepo.all()).toEqual([feedback0, feedback1]);
  });

  it("updates feedback", async () => {
    const feedbackItem = makeFeedback<FeedbackSchema>({ id: "1" });
    const feedbackRepo = new FakeFeedbackRepository([feedbackItem as Feedback]);
    const feedbackService = new FeedbackService(feedbackRepo);

    const updatedFeedback: FeedbackSchema = {
      ...feedbackItem,
      title: "Updated title",
      category: "Enhancement",
      details: "Updated details",
    };

    await feedbackService.update("1", updatedFeedback);

    expect(await feedbackRepo.all()).toEqual([updatedFeedback]);
  });

  it("deletes feedback", async () => {
    const feedbackItem0 = { ...makeFeedback<FeedbackSchema>(), id: "1" };
    const feedbackItem1 = { ...makeFeedback<FeedbackSchema>(), id: "2" };
    const feedbackRepo = new FakeFeedbackRepository([
      feedbackItem0 as Feedback,
      feedbackItem1 as Feedback,
    ]);
    const feedbackService = new FeedbackService(feedbackRepo);

    await feedbackService.delete("1");

    expect(await feedbackRepo.all()).toEqual([feedbackItem1]);
  });
});
