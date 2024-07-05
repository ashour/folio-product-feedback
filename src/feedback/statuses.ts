export const statuses = [
  "Suggestion",
  "Planned",
  "In-Progress",
  "Live",
] as const;

export type Status = (typeof statuses)[number];
