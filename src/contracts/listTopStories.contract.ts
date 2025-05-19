import { z } from "../setup/zod-openapi-init.js";

export const listTopStoriesInput = z.object({}); // no input needed

export const listTopStoriesOutput = z.array(z.number()).openapi({
  description: "Array of Hacker News story IDs",
});
