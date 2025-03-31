import "server-only";
import getEncoreBackendClient from "../clients/get-encore-backend-client";
import { type BoardColumn } from "~/lib/types";

const client = getEncoreBackendClient();

export async function readBoardColumnsWithBoardId(
  boardId: string,
): Promise<BoardColumn[]> {
  const response = await client.boardColumns.read({ boardId });
  if (!response.success) {
    throw new Error("Failed to fetch board columns");
  }
  return response.result;
}
