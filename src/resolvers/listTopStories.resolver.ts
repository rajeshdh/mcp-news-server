import { Request, Response } from "express";
import {
  listTopStoriesInput,
  listTopStoriesOutput,
} from "../contracts/listTopStories.contract.js";
import { fetchTopStoryIds } from "../utils/hnClient.js";

export const listTopStoriesHandler = async (req: Request, res: Response) => {
  try {
    listTopStoriesInput.parse({}); // validate input

    const topStoryIds = await fetchTopStoryIds();

    res.json(listTopStoriesOutput.parse(topStoryIds)); // validate and send
  } catch (error) {
    console.error("Error in listTopStoriesHandler:", error);
    res.status(500).json({ error: "Failed to fetch top stories" });
  }
};
