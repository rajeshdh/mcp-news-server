import { z } from "zod";

export const getStoryInput = z.object({
  id: z.string().regex(/^\d+$/, "ID must be numeric"),
});

export const getStoryOutput = z.object({
  id: z.number(),
  title: z.string(),
  url: z.string().optional(),
  score: z.number(),
  by: z.string(),
  time: z.number(),
  type: z.string(),
});
