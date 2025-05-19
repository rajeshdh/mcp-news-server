# 📰 MCP News Server

> A clean, minimal MCP wrapper around the Hacker News API — built to showcase the Modular Contract Protocol (MCP) structure, typed contracts, and LLM-compatible interface.

## 🌐 Live Demo

🟢 Deployed at: [https://mcp-news-server.onrender.com](https://mcp-news-server.onrender.com)

### Try It Now

- [GET /api/listTopStories](https://mcp-news-server.onrender.com/api/listTopStories)
- [GET /api/getStory/8863](https://mcp-news-server.onrender.com/api/getStory/8863)
- [GET /openapi.json](https://mcp-news-server.onrender.com/openapi.json)

## 🚀 What is This?

This project demonstrates how to transform an existing REST API into an **MCP-compliant server**. It wraps the [Hacker News API](https://github.com/HackerNews/API) using modular components:

- **Contracts** defined with `zod` (input/output validation)
- **Resolvers** for logic
- **Handlers** for HTTP routing

Instead of directly exposing REST routes, the MCP pattern enforces a strict schema-first approach. Each action is a callable unit with clear input/output, making it:

- Easy to test
- Safe to validate
- Ready to integrate with **LLMs and autonomous agents**

My goal with this wrapper is to **learn about MCPs**, and the **end-to-end process** of turning raw REST APIs into structured MCP actions, and prepare these for the **MCP marketplace** — where tools and agents can discover and use them programmatically.

---

## 💡 Why Use MCP Instead of Raw REST Calls?

Traditional REST APIs:

- May lack input/output schemas
- Can have inconsistent formats or unpredictable errors
- Are not always introspectable

MCP APIs:

- ✅ **Contract-driven** (clearly defined structure via `zod`)
- ✅ **Composable** (can be stitched into other workflows easily)
- ✅ **LLM-friendly** (self-descriptive endpoints for agents to reason about)
- ✅ **Modular** (contracts + logic + transport are decoupled)

LLMs (like GPT) prefer calling structured functions — MCP is like giving your API a clean `function signature` they can understand.

---

## 🔧 Tech Stack

- Node.js + Express
- TypeScript
- Zod (schema validation)
- Axios (API requests)

---

## 🗂️ Endpoints

### 1. `GET /api/listTopStories`

Returns a list of top Hacker News story IDs.

#### Example:

```bash
curl http://localhost:3000/api/listTopStories
```

#### Response:

```json
[38643, 38642, 38641, ...]
```

---

### 2. `GET /api/getStory/:id`

Returns full story data for a given story ID.

#### Example:

```bash
curl http://localhost:3000/api/getStory/8863
```

#### Response:

```json
{
  "id": 8863,
  "title": "My YC app: Dropbox - Throw away your USB drive",
  "url": "http://www.getdropbox.com/u/2/screencast.html",
  "score": 111,
  "by": "dhouston",
  "time": 1175714200,
  "type": "story"
}
```

---

## 📁 Project Structure

```
src/
├── contracts/       # Zod contracts for inputs/outputs
├── resolvers/       # Business logic layer
├── utils/           # Hacker News API client
├── handlers/        # Express route handlers
└── server.ts        # Main entry point
```

---

## 🧠 How LLMs Can Use This

Since each endpoint is schema-bound, an LLM agent can introspect the contract and:

- Validate user input before calling the API
- Chain outputs to other tools
- Rely on consistent structure for reasoning

This is ideal for use in agentic workflows (e.g. LangChain, AutoGPT, ai-agent-flow).

You could expose these endpoints as `functions` in OpenAI or Claude’s API format for:

- News summarization agents
- Fact-checking bots
- Research assistants

---

## 🤖 Function Calling Integration (OpenAI / Claude)

You can easily host this API and plug it into OpenAI or Claude using their function-calling structure.

### Example: OpenAI Function Schema for `/getStory`

```json
{
  "name": "getStory",
  "description": "Retrieve story details by ID from Hacker News",
  "parameters": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "description": "The numeric ID of the Hacker News story"
      }
    },
    "required": ["id"]
  }
}
```

In your function-calling agent, point this to:

```
GET https://your-deployed-api.com/api/getStory/:id
```

You can wrap the fetch logic using tools like:

- `functions` field in OpenAI Chat API
- LangChain's `RequestsGetTool`
- ai-agent-flow's `HttpCallNode`

---

## 🧪 Optional: OpenAPI / JSON Schema Export

To make your MCP server compatible with Swagger UI, RapidAPI, or agent frameworks that consume OpenAPI:

Install:

```bash
npm install zod-to-openapi
```

Then generate OpenAPI docs from your zod contracts:

```ts
import { generateOpenApiDocument, OpenAPIRegistry } from 'zod-to-openapi';
import { getStoryInput, getStoryOutput } from './contracts/getStory.contract';

const registry = new OpenAPIRegistry();
registry.registerPath({ ... }); // define paths, schemas, and responses

export const openApiDoc = generateOpenApiDocument(registry.definitions, {
  openapi: '3.0.0',
  info: { title: 'MCP News Server', version: '1.0.0' },
  servers: [{ url: 'https://your-deployed-api.com' }],
});
```

---

## 🛠️ Local Setup

```bash
git clone https://github.com/rajeshdh/mcp-news-server
cd mcp-news-server
npm install
npm run dev
```

---

## ✨ Try It Out

- [ ] Explore `/listTopStories`
- [ ] Try `/getStory/:id`
- [ ] Plug into an LLM workflow
- [ ] Add search or comments support next
- [ ] Generate OpenAPI JSON from contracts
- [ ] Register your MCP actions in a public agent marketplace

---

## 📜 License

MIT
