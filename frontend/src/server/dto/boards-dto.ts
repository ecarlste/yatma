import "server-only";
import getEncoreBackendClient from "../clients/get-encore-backend-client";

const client = getEncoreBackendClient();

export async function readBoardWithId(boardId: string) {
  const board = await client.boards.readOne(boardId);

  if (!board.result) {
    throw new Error(
      `Failed to read board with ID ${boardId} from Encore backend`,
    );
  }

  return board.result;
}

export async function readAllBoards() {
  const boards = await client.boards.read();

  if (!boards.result) {
    throw new Error("Failed to read boards from Encore backend");
  }

  return boards.result;
}
