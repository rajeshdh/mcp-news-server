import { z } from "../setup/zod-openapi-init.js";

export const getStoryInput = z
  .object({
    id: z
      .string()
      .regex(/^\d+$/, "ID must be numeric")
      .openapi({ description: "Story ID" }),
  })
  .openapi({ title: "GetStoryInput" });

export const getStoryOutput = z
  .object({
    id: z.number().openapi({ description: "ID of the story" }),
    title: z.string().openapi({ description: "Title of the story" }),
    url: z.string().optional().openapi({ description: "URL (if any)" }),
    score: z.number().openapi({ description: "Score or points of the story" }),
    by: z.string().openapi({ description: "Author" }),
    time: z.number().openapi({ description: "Unix timestamp" }),
    type: z.string().openapi({ description: "Item type (story/comment)" }),
  })
  .openapi({ title: "GetStoryOutput" });
