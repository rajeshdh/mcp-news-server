import express from "express";
import { listTopStoriesHandler } from "../resolvers/listTopStories.resolver.js";
import { getStoryHandler } from "../resolvers/getStory.resolver.js";

export const handler = express.Router();

handler.get("/listTopStories", listTopStoriesHandler);
handler.get("/getStory/:id", getStoryHandler);
