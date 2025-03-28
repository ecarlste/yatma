import "server-only";
import getBoardsClient from "../clients/get-encore-backend-client";
import { type BoardColumn } from "~/lib/types";

const client = getBoardsClient();

export async function readBoardColumnsWithBoardId(
  boardId: string,
): Promise<BoardColumn[]> {
  const response = await client.boardColumns.read({ boardId });
  if (!response.success) {
    throw new Error("Failed to fetch board columns");
  }
  return response.result;
}
