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

  createMany: async (boards: CreateBoardDto[]): Promise<BoardResponse> => {
    const boardNames = boards.map((board) => board.name);

    // Build the query dynamically with a switch for up to 10 boards
    const rows = (() => {
      switch (boardNames.length) {
        case 1:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}) RETURNING id, name`;
        case 2:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}) RETURNING id, name`;
        case 3:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}) RETURNING id, name`;
        case 4:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}) RETURNING id, name`;
        case 5:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}) RETURNING id, name`;
        case 6:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}), (${boardNames[5]}) RETURNING id, name`;
        case 7:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}), (${boardNames[5]}), (${boardNames[6]}) RETURNING id, name`;
        case 8:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}), (${boardNames[5]}), (${boardNames[6]}), (${boardNames[7]}) RETURNING id, name`;
        case 9:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}), (${boardNames[5]}), (${boardNames[6]}), (${boardNames[7]}), (${boardNames[8]}) RETURNING id, name`;
        case 10:
          return db.query`INSERT INTO boards (name) VALUES (${boardNames[0]}), (${boardNames[1]}), (${boardNames[2]}), (${boardNames[3]}), (${boardNames[4]}), (${boardNames[5]}), (${boardNames[6]}), (${boardNames[7]}), (${boardNames[8]}), (${boardNames[9]}) RETURNING id, name`;
        default:
          throw new Error(
            `Unsupported number of boards: ${boardNames.length}. Max supported is 10.`
          );
      }
    })();

    const createdBoards: BoardDto[] = [];
    for await (const row of rows) {
      createdBoards.push(row as BoardDto);
    }

    return {
      success: true,
      message: "Boards created successfully",
      result: createdBoards,
    };
  },

  find: async (): Promise<BoardResponse> => {
    const rows = await db.query`
            SELECT id, name
            FROM boards
        `;

    const boards: BoardDto[] = [];
    for await (const row of rows) {
      boards.push(row as BoardDto);
    }

    return {
      success: true,
      message: "Boards found successfully",
      result: boards,
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

  delete: async (id: string): Promise<BoardResponse> => {
    const deletedBoard = await db.queryRow`
            DELETE FROM boards
            WHERE id = ${id}
            RETURNING id, name
        `;

    if (!deletedBoard) {
      return {
        success: false,
        message: "Failed to delete board",
      };
    }

    return {
      success: true,
      message: "Board deleted successfully",
      result: deletedBoard as BoardDto,
    };
  },
};

export default BoardService;
