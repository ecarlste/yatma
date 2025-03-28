import "server-only";
import getBoardsClient from "../clients/get-encore-backend-client";
import { type boards } from "../generated/encore-backend-client";

const client = getBoardsClient();

export async function readBoardWithId(boardId: string) {
  const board = await client.boards.readOne(boardId);

  if (!board.result) {
    throw new Error(
      `Failed to read board with ID ${boardId} from Encore backend`,
    );
  }

  return board.result as boards.BoardDto;
}

export async function readAllBoards() {
  const boards = await client.boards.read();

  if (!boards.result) {
    throw new Error("Failed to read boards from Encore backend");
  }

  return boards.result as boards.BoardDto[];
}
