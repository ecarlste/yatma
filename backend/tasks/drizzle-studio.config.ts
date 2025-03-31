import { execSync } from "child_process";
import { defineConfig } from "drizzle-kit";

function getPostgresUrl() {
  try {
    return execSync("encore db conn-uri tasks --env=local", {
      encoding: "utf8",
    }).trim();
  } catch (error) {
    console.error("Failed to fetch POSTGRES_URL from Encore: ", error);
    console.error(
      "Ensure that you have the Encore CLI installed and are running this command in the root of your project."
    );
    process.exit(1);
  }
}

export default defineConfig({
  out: "tasks/migrations",
  schema: "tasks/board.schema.ts",
  dbCredentials: {
    url: getPostgresUrl(),
  },
  dialect: "postgresql",
});
