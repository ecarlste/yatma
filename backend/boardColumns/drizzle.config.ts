import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "boardColumns/migrations",
  schema: "boardColumns/board-column.schema.ts",
  dialect: "postgresql",
});
