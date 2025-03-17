import { db } from "./board.db";
import { BoardDto, BoardResponse, CreateBoardDto } from "./board.interface";

const BoardService = {
  create: async (board: CreateBoardDto): Promise<BoardResponse> => {
    const createdBoard = await db.queryRow`
            INSERT INTO boards (name)
            VALUES (${board.name})
            RETURNING id, name
        `;

    if (!createdBoard) {
      return {
        success: false,
        message: "Failed to create board",
      };
    }

    return {
      success: true,
      message: "Board created successfully",
      result: createdBoard as BoardDto,
    };
  },

  findOne: async (id: string): Promise<BoardResponse> => {
    const board = await db.queryRow`
            SELECT id, name
            FROM boards
            WHERE id = ${id}
        `;

    if (!board) {
      return {
        success: false,
        message: "Board not found",
      };
    }

    return {
      success: true,
      message: "Board found successfully",
      result: board as BoardDto,
    };
  },
};

export default BoardService;
