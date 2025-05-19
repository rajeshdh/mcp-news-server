import express from "express";
import { listTopStoriesHandler } from "../resolvers/listTopStories.resolver";
import { getStoryHandler } from "../resolvers/getStory.resolver";

export const handler = express.Router();

handler.get("/listTopStories", listTopStoriesHandler);
handler.get("/getStory/:id", getStoryHandler);
