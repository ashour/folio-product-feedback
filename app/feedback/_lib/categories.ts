export const categories = [
  "Feature",
  "UI",
  "UX",
  "Enhancement",
  "Bug",
] as const;

export type Category = (typeof categories)[number];
