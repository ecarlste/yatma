export interface DbError extends Error {
  code: string;
}

export const uniqueViolationErrorCode = "23505" as const;
