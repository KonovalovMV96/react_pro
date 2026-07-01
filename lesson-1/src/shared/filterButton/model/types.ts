export const FILTERS = ["all", "completed", "incomplete"] as const;

export type Filter = typeof FILTERS[number];
