import { Request, Response } from "express";
import {
  getStoryInput,
  getStoryOutput,
} from "../contracts/getStory.contract.js";
import { fetchStoryById } from "../utils/hnClient.js";

export const getStoryHandler = async (req: Request, res: Response) => {
  try {
    const input = getStoryInput.parse(req.params);

    const story = await fetchStoryById(Number(input.id));
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }

    res.json(getStoryOutput.parse(story));
  } catch (error) {
    console.error("Error in getStoryHandler:", error);
    res.status(500).json({ error: "Failed to fetch story" });
  }
};
