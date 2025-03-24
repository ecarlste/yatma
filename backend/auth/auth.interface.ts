import { Header } from "encore.dev/api";

/**
 * Parameters required for authentication
 */
export type AuthParams = {
  authorization: Header<"Authorization">;
};

/**
 * Data returned after successful authentication
 */
export type AuthData = {
  userID: string;
};
