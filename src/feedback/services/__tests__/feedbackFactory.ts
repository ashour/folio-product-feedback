import { FeedbackSchema } from "@/feedback/schemas";
import { faker } from "@faker-js/faker";
import { Feedback } from "@prisma/client";
import { categories } from "../../categories";
import { statuses } from "../../statuses";

export function makeFeedback<T extends FeedbackSchema | Feedback>(
  overrides: Partial<FeedbackSchema> | null = null,
): T {
  const updatedAt = faker.date.recent();

  return {
    id: faker.string.uuid(),
    createdAt: faker.date.recent({ refDate: updatedAt, days: 1 }),
    updatedAt,
    title: faker.lorem.words(5),
    details: faker.lorem.sentence(),
    authorId: faker.string.uuid(),
    category: faker.helpers.arrayElement(categories),
    status: faker.helpers.arrayElement(statuses),
    ...overrides,
  } as T;
}
