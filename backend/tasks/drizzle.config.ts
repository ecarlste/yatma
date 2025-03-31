import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "tasks/migrations",
  schema: "tasks/task.schema.ts",
  dialect: "postgresql",
});
