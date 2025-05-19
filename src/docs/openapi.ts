import {
  generateOpenApiDocument,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { listTopStoriesOutput } from "../contracts/listTopStories.contract";
import { getStoryInput, getStoryOutput } from "../contracts/getStory.contract";

const registry = new OpenAPIRegistry();

registry.registerPath({
  method: "get",
  path: "/api/listTopStories",
  responses: {
    200: {
      description: "List of top Hacker News story IDs",
      content: {
        "application/json": {
          schema: listTopStoriesOutput,
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/getStory/{id}",
  request: {
    params: getStoryInput,
  },
  responses: {
    200: {
      description: "Returns story data",
      content: {
        "application/json": {
          schema: getStoryOutput,
        },
      },
    },
  },
});

export const openApiJson = generateOpenApiDocument(registry.definitions, {
  openapi: "3.0.0",
  info: {
    title: "MCP News Server",
    version: "1.0.0",
  },
  servers: [{ url: "https://mcp-news-server.onrender.com" }],
});
