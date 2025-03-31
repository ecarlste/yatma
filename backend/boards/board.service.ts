import { eq } from "drizzle-orm";
import { db } from "./board.db";
import {
  BoardListResponse,
  BoardResponse,
  CreateBoardDto,
  UpdateBoardDto,
} from "./board.interface";
import { boardsTable } from "./board.schema";
import { executeQuery } from "../lib/db-utils";
import { APIError, ErrCode } from "encore.dev/api";
import { BoardNotFoundError } from "../lib/error-types";

const BoardService = {
  create: async (board: CreateBoardDto): Promise<BoardResponse> => {
    const [createdBoard] = await executeQuery(
      db.insert(boardsTable).values(board).returning(),
      "create board",
      `A board with name '${board.name}' already exists`
    );

    return {
      success: true,
      result: createdBoard,
    };
  },

  createMany: async (boards: CreateBoardDto[]): Promise<BoardListResponse> => {
    const createdBoards = await executeQuery(
      db.insert(boardsTable).values(boards).returning(),
      "create multiple boards",
      "One or more boards already exist with the given names"
    );

    return {
      success: true,
      result: createdBoards,
    };
  },

  find: async (): Promise<BoardListResponse> => {
    const boards = await executeQuery(
      db.select().from(boardsTable),
      "find boards"
    );

    return {
      success: true,
      result: boards,
    };
  },

  findOne: async (id: string): Promise<BoardResponse> => {
    const [board] = await executeQuery(
      db.select().from(boardsTable).where(eq(boardsTable.id, id)).limit(1),
      "find one board"
    );

    if (!board) {
      throw BoardNotFoundError(id);
    }

    return {
      success: true,
      result: board,
    };
  },

  update: async (id: string, data: UpdateBoardDto): Promise<BoardResponse> => {
    const [updatedBoard] = await executeQuery(
      db
        .update(boardsTable)
        .set(data)
        .where(eq(boardsTable.id, id))
        .returning(),
      "update board",
      data.name ? `A board with name '${data.name}' already exists` : undefined
    );

    if (!updatedBoard) {
      throw BoardNotFoundError(id);
    }

    return {
      success: true,
      result: updatedBoard,
    };
  },

  delete: async (id: string): Promise<BoardResponse> => {
    const [deletedBoard] = await executeQuery(
      db.delete(boardsTable).where(eq(boardsTable.id, id)).returning(),
      "delete board"
    );

    if (!deletedBoard) {
      throw BoardNotFoundError(id);
    }

    return {
      success: true,
      result: deletedBoard,
    };
  },
};

export default BoardService;
