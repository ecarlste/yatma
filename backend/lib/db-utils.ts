import { APIError, ErrCode } from "encore.dev/api";
import { DbError, uniqueViolationErrorCode } from "./error-types";

export async function executeQuery<T>(
  query: Promise<T>,
  operation: string,
  duplicateMessage?: string
): Promise<T> {
  try {
    return await query;
  } catch (err: unknown) {
    if (
      duplicateMessage &&
      err instanceof Error &&
      (err as DbError).code === uniqueViolationErrorCode
    ) {
      throw new APIError(ErrCode.AlreadyExists, duplicateMessage);
    }

    const error = err instanceof Error ? err : new Error("Unknown error");
    throw APIError.internal(`Failed to ${operation}: ${error.message}`, error);
  }
}
