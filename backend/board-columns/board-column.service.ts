import { eq } from "drizzle-orm";
import { db } from "./board-column.db";
import {
  boardColumnNotFoundResponse,
  BoardColumnResponse,
  CreateBoardColumnDto,
  UpdateBoardColumnDto,
} from "./board-column.interface";
import { boardColumnsTable } from "./board-column.schema";
import { boards } from "~encore/clients";
import { APIError, ErrCode } from "encore.dev/api";

const BoardColumnService = {
  create: async (
    boardColumn: CreateBoardColumnDto
  ): Promise<BoardColumnResponse> => {
    const board = await boards.readOne({ id: boardColumn.boardId });

    if (!board.success) {
      throw new APIError(
        ErrCode.NotFound,
        "Board with specified boardId not found"
      );
    }

    const [createdBoardColumn] = await db
      .insert(boardColumnsTable)
      .values(boardColumn)
      .returning();

    return {
      success: true,
      result: createdBoardColumn,
    };
  },

  createMany: async (
    boardColumns: CreateBoardColumnDto[]
  ): Promise<BoardColumnResponse> => {
    const createdBoardColumns = await db
      .insert(boardColumnsTable)
      .values(boardColumns)
      .returning();

    return {
      success: true,
      result: createdBoardColumns,
    };
  },

  find: async (): Promise<BoardColumnResponse> => {
    const boardColumns = await db.select().from(boardColumnsTable);

    return {
      success: true,
      result: boardColumns,
    };
  },

  findOne: async (id: string): Promise<BoardColumnResponse> => {
    const [boardColumn] = await db
      .select()
      .from(boardColumnsTable)
      .where(eq(boardColumnsTable.id, id))
      .limit(1);

    if (!boardColumn) {
      throw new APIError(
        ErrCode.NotFound,
        `Board column with id '${id}' not found`
      );
    }

    return {
      success: true,
      result: boardColumn,
    };
  },

  update: async (
    id: string,
    data: UpdateBoardColumnDto
  ): Promise<BoardColumnResponse> => {
    const [updatedBoardColumn] = await db
      .update(boardColumnsTable)
      .set(data)
      .where(eq(boardColumnsTable.id, id))
      .returning();

    if (!updatedBoardColumn) {
      return boardColumnNotFoundResponse;
    }

    return {
      success: true,
      result: updatedBoardColumn,
    };
  },

  delete: async (id: string): Promise<BoardColumnResponse> => {
    const [deletedBoardColumn] = await db
      .delete(boardColumnsTable)
      .where(eq(boardColumnsTable.id, id))
      .returning();

    if (!deletedBoardColumn) {
      return boardColumnNotFoundResponse;
    }

    return {
      success: true,
      result: deletedBoardColumn,
    };
  },
};

export default BoardColumnService;
