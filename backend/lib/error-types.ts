export interface DbError extends Error {
  code: string;
}

export const foreignKeyViolationErrorCode = "23503" as const;
export const uniqueViolationErrorCode = "23505" as const;
