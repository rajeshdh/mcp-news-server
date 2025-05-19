import { z } from "../setup/zod-openapi-init.js";
import { createDocument } from "zod-openapi";
import {
  getStoryInput,
  getStoryOutput,
} from "../contracts/getStory.contract.js";
import { listTopStoriesOutput } from "../contracts/listTopStories.contract.js";

export const openApiJson = createDocument({
  openapi: "3.0.0",
  info: {
    title: "MCP News Server",
    version: "1.0.0",
  },
  paths: {
    "/api/listTopStories": {
      get: {
        description: "Returns a list of top story IDs from Hacker News",
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: listTopStoriesOutput,
              },
            },
          },
        },
      },
    },
    "/api/getStory/{id}": {
      get: {
        description: "Returns full details for a specific story by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: getStoryInput.shape.id,
          },
        ],
        responses: {
          "200": {
            description: "Story object",
            content: {
              "application/json": {
                schema: getStoryOutput,
              },
            },
          },
        },
      },
    },
  },
});
