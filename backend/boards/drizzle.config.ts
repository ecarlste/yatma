import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "boards/migrations",
  schema: "boards/board.schema.ts",
  dialect: "postgresql",
});
