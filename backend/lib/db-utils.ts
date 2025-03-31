import { APIError, ErrCode } from "encore.dev/api";
import {
  DbError,
  foreignKeyViolationErrorCode,
  uniqueViolationErrorCode,
} from "./error-types";

export async function executeQuery<T>(
  query: Promise<T>,
  operation: string,
  duplicateMessage?: string
): Promise<T> {
  try {
    return await query;
  } catch (err: unknown) {
    if (!(err instanceof Error)) {
      throw APIError.internal(
        `Failed to ${operation}: Unknown error`,
        new Error("Unknown error")
      );
    }

    const dbErr = err as DbError;
    switch (dbErr.code) {
      case uniqueViolationErrorCode:
        if (duplicateMessage) {
          throw new APIError(ErrCode.AlreadyExists, duplicateMessage);
        }
        break;
      case foreignKeyViolationErrorCode:
        throw new APIError(
          ErrCode.InvalidArgument,
          `Invalid reference in ${operation}: ${dbErr.message
            .split("DETAIL:")[0]
            .trim()}`
        );
      default:
        throw APIError.internal(
          `Failed to ${operation}: ${dbErr.message}`,
          dbErr
        );
    }

    throw APIError.internal(`Failed to ${operation}: ${dbErr.message}`, dbErr);
  }
}
