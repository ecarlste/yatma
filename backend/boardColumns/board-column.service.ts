import { eq } from "drizzle-orm";
import { db } from "./board-column.db";
import {
  BoardColumnListResponse,
  BoardColumnResponse,
  CreateBoardColumnDto,
  UpdateBoardColumnDto,
} from "./board-column.interface";
import { boardColumnsTable } from "./board-column.schema";
import { boards } from "~encore/clients";
import { APIError, ErrCode } from "encore.dev/api";
import { executeQuery } from "../lib/db-utils";

const BoardColumnService = {
  create: async (
    boardColumn: CreateBoardColumnDto
  ): Promise<BoardColumnResponse> => {
    const board = await boards.readOne({ id: boardColumn.boardId });
    if (!board.success) {
      throw new APIError(
        ErrCode.NotFound,
        `Board with ID '${boardColumn.boardId}' not found`
      );
    }

    const [createdBoardColumn] = await executeQuery(
      db.insert(boardColumnsTable).values(boardColumn).returning(),
      "create board column",
      `A column with name '${boardColumn.name}' already exists for board '${boardColumn.boardId}'`
    );

    return { success: true, result: createdBoardColumn };
  },

  createMany: async (
    boardColumns: CreateBoardColumnDto[]
  ): Promise<BoardColumnListResponse> => {
    if (boardColumns.length === 0) {
      return { success: true, result: [] };
    }

    const boardId = boardColumns[0].boardId;
    const mismatched = boardColumns.some(
      (column) => column.boardId !== boardId
    );
    if (mismatched) {
      throw new APIError(
        ErrCode.InvalidArgument,
        "All columns must belong to the same board"
      );
    }

    const board = await boards.readOne({ id: boardId });
    if (!board.success) {
      throw new APIError(
        ErrCode.NotFound,
        `Board with ID '${boardId}' not found`
      );
    }

    const createdBoardColumns = await executeQuery(
      db.insert(boardColumnsTable).values(boardColumns).returning(),
      "create multiple board columns",
      "One or more columns already exist with the given names for their boards"
    );

    return {
      success: true,
      result: createdBoardColumns,
    };
  },

  find: async (boardId?: string): Promise<BoardColumnListResponse> => {
    const query = boardId
      ? db
          .select()
          .from(boardColumnsTable)
          .where(eq(boardColumnsTable.boardId, boardId))
          .orderBy(boardColumnsTable.sortIndex)
      : db
          .select()
          .from(boardColumnsTable)
          .orderBy(boardColumnsTable.boardId, boardColumnsTable.sortIndex);
    const boardColumns = await executeQuery(query, "find board columns");

    return {
      success: true,
      result: boardColumns,
    };
  },

  findOne: async (id: string): Promise<BoardColumnResponse> => {
    const [boardColumn] = await executeQuery(
      db
        .select()
        .from(boardColumnsTable)
        .where(eq(boardColumnsTable.id, id))
        .limit(1),
      "find one board column"
    );

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
    const [updatedBoardColumn] = await executeQuery(
      db
        .update(boardColumnsTable)
        .set(data)
        .where(eq(boardColumnsTable.id, id))
        .returning(),
      "update board column",
      `A column with name '${data.name}' already exists for this board`
    );

    if (!updatedBoardColumn) {
      throw APIError.notFound(`Board column with ID '${id}' not found`);
    }

    return {
      success: true,
      result: updatedBoardColumn,
    };
  },

  delete: async (id: string): Promise<BoardColumnResponse> => {
    const [deletedBoardColumn] = await executeQuery(
      db
        .delete(boardColumnsTable)
        .where(eq(boardColumnsTable.id, id))
        .returning(),
      "delete board column"
    );

    if (!deletedBoardColumn) {
      throw APIError.notFound(`Board column with ID '${id}' not found`);
    }

    return {
      success: true,
      result: deletedBoardColumn,
    };
  },
};

export default BoardColumnService;
