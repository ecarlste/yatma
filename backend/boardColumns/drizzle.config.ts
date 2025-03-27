import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "board-columns/migrations",
  schema: "board-columns/board-column.schema.ts",
  dialect: "postgresql",
});
