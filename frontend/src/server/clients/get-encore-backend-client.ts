import { env } from "~/env";
import Client, { Environment, Local } from "../generated/encore-backend-client";

const getEncoreBackendClient = () => {
  const targetEnv =
    process.env.NODE_ENV === "development" ? Local : Environment("prod");

  return new Client(targetEnv, {
    auth: {
      authorization: `Bearer ${env.ENCORE_BACKEND_CLIENT_API_KEY}`,
    },
  });
};

export default getEncoreBackendClient;
