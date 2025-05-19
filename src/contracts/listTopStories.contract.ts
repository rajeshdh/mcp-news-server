import { z } from "zod";

export const listTopStoriesInput = z.object({}); // no input needed

export const listTopStoriesOutput = z.array(z.number()); // array of story IDs
