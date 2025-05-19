import express from "express";
import { handler } from "./handlers";
import { openApiJson } from "./docs/openapi.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", handler);

app.listen(PORT, () => {
  console.log(`🚀 MCP News Server running at http://localhost:${PORT}`);
});
app.get("/openapi.json", (_, res) => {
  res.json(openApiJson);
});
