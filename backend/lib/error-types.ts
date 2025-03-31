import { APIError } from "encore.dev/api";

export interface DbError extends Error {
  code: string;
}

export const foreignKeyViolationErrorCode = "23503" as const;
export const uniqueViolationErrorCode = "23505" as const;

export function BoardNotFoundError(boardId: string): APIError {
  return APIError.notFound(`board with ID '${boardId}' not found`);
}

export function ColumnNotFoundError(columnId: string): APIError {
  return APIError.notFound(`column with ID '${columnId}' not found`);
}

export function TaskNotFoundError(taskId: string): APIError {
  return APIError.notFound(`task with ID '${taskId}' not found`);
}
