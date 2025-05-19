# 📰 MCP News Server

> A clean, minimal MCP wrapper around the Hacker News API — built to showcase the Modular Contract Protocol (MCP) structure, typed contracts, and LLM-compatible interface.

## 🌐 Live Demo

🟢 Deployed at: [https://mcp-news-server.onrender.com](https://mcp-news-server.onrender.com)

### Try It Now

- [GET /api/listTopStories](https://mcp-news-server.onrender.com/api/listTopStories)
- [GET /api/getStory/8863](https://mcp-news-server.onrender.com/api/getStory/8863)
- [GET /openapi.json](https://mcp-news-server.onrender.com/openapi.json)

---

## 🚀 What is This?

This project demonstrates how to transform an existing REST API into an **MCP-compliant server**. It wraps the [Hacker News API](https://github.com/HackerNews/API) using modular components:

- **Contracts** defined with `zod` and `zod-openapi` for typed and documented inputs/outputs
- **Resolvers** for business logic
- **Handlers** for HTTP routing
- **OpenAPI integration** for LLM function calling

My goal with this wrapper is to **learn and demonstrate the full MCP process**, and prepare APIs for the **MCP marketplace** — where tools and agents can discover and use them programmatically.

---

## 💡 Why Use MCP Instead of Raw REST Calls?

Traditional REST APIs:

- ❌ No contracts
- ❌ Inconsistent formats
- ❌ Not LLM friendly

MCP APIs:

- ✅ Contract-driven (with Zod)
- ✅ Composable and self-descriptive
- ✅ LLM-ready (via OpenAPI and function schemas)

---

## 🔧 Tech Stack

- Node.js + Express
- TypeScript
- Zod + `zod-openapi`
- Axios
- Deployed on Render

---

## 📁 Project Structure

```
src/
├── contracts/                # Zod + OpenAPI metadata
├── resolvers/                # Business logic
├── handlers/                 # Express routes
├── utils/                    # Hacker News client
├── docs/openapi.ts           # OpenAPI spec generator (zod-openapi)
├── setup/zod-openapi-init.ts # Shared zod setup with OpenAPI support
└── server.ts                 # Main entry point
```

---

## 🗂️ Endpoints

### 1. `GET /api/listTopStories`

Returns a list of top Hacker News story IDs.

#### Example:

```bash
curl https://mcp-news-server.onrender.com/api/listTopStories
```

#### Response:

```json
[38643, 38642, 38641]
```

---

### 2. `GET /api/getStory/:id`

Returns full story data for a given story ID.

#### Example:

```bash
curl https://mcp-news-server.onrender.com/api/getStory/8863
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

## 🧠 How LLMs Can Use This

Each MCP endpoint is:

- Strictly typed
- Schema-bound with Zod
- Self-documenting via OpenAPI

This makes it ideal for:

- LLM agents (OpenAI, Claude)
- LangChain tools
- ai-agent-flow pipelines

---

## 🤖 Function Calling Example (OpenAI / Claude)

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

➡️ Point to:
`GET https://mcp-news-server.onrender.com/api/getStory/:id`

---

## 📄 OpenAPI Schema

```bash
curl https://mcp-news-server.onrender.com/openapi.json
```

This endpoint can be used in:

- Swagger UI
- API clients (Postman, Insomnia)
- LLM frameworks for function discovery

---

## 🛠️ Local Setup

```bash
git clone https://github.com/rajeshdh/mcp-news-server
cd mcp-news-server
npm install
npm run dev
```

---

## ✨ What You Can Build with This

- A summarizer tool for top HN stories
- A GPT agent that fetches and ranks HN stories
- A fact-checking or news validation agent
- Your own open MCP marketplace entry!

---

## 📜 License

MIT
