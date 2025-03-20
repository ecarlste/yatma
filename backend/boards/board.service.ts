import { eq } from "drizzle-orm";
import { db } from "./board.db";
import { BoardResponse, CreateBoardDto } from "./board.interface";
import { boardsTable } from "./board.schema";

const BoardService = {
  create: async (board: CreateBoardDto): Promise<BoardResponse> => {
    const [createdBoard] = await db
      .insert(boardsTable)
      .values(board)
      .returning();

    return {
      success: true,
      result: createdBoard,
    };
  },

  createMany: async (boards: CreateBoardDto[]): Promise<BoardResponse> => {
    const createdBoards = await db
      .insert(boardsTable)
      .values(boards)
      .returning();

    return {
      success: true,
      result: createdBoards,
    };
  },

  find: async (): Promise<BoardResponse> => {
    const boards = await db.select().from(boardsTable);

    return {
      success: true,
      result: boards,
    };
  },

  findOne: async (id: string): Promise<BoardResponse> => {
    const [board] = await db
      .select()
      .from(boardsTable)
      .where(eq(boardsTable.id, id))
      .limit(1);

    if (!board) {
      return {
        success: false,
        message: "Board not found",
      };
    }

    return {
      success: true,
      result: board,
    };
  },

  delete: async (id: string): Promise<BoardResponse> => {
    const [deletedBoard] = await db
      .delete(boardsTable)
      .where(eq(boardsTable.id, id))
      .returning();

    if (!deletedBoard) {
      return {
        success: false,
        message: "Board not found",
      };
    }

    return {
      success: true,
      result: deletedBoard,
    };
  },
};

export default BoardService;
