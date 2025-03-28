import { api } from "encore.dev/api";
import { withErrorHandling } from "../lib/error-handling";
import BoardColumnService from "./board-column.service";
import {
  BoardColumnListResponse,
  BoardColumnResponse,
  CreateBoardColumnRequest,
  CreateManyBoardColumnsRequest,
  DeleteBoardColumnRequest,
  ReadBoardColumnsRequest,
  ReadOneBoardColumnRequest,
  UpdateBoardColumnRequest,
} from "./board-column.interface";

export const create = api<CreateBoardColumnRequest, BoardColumnResponse>(
  { auth: true, expose: true, path: "/boardColumns", method: "POST" },
  withErrorHandling("creating boardColumn", async (req) => {
    return await BoardColumnService.create(req);
  })
);

export const createMany = api<
  CreateManyBoardColumnsRequest,
  BoardColumnListResponse
>(
  { auth: true, expose: true, path: "/boardColumns/bulk", method: "POST" },
  withErrorHandling("creating boardColumns", async (req) => {
    return await BoardColumnService.createMany(req.boardColumns);
  })
);

export const read = api<ReadBoardColumnsRequest, BoardColumnListResponse>(
  { auth: true, expose: true, path: "/boardColumns", method: "GET" },
  withErrorHandling("reading boardColumns", async ({ boardId }) => {
    return await BoardColumnService.find(boardId);
  })
);

export const readOne = api<ReadOneBoardColumnRequest, BoardColumnResponse>(
  { auth: true, expose: true, path: "/boardColumns/:id", method: "GET" },
  withErrorHandling("reading boardColumn", async (req) => {
    return await BoardColumnService.findOne(req.id);
  })
);

export const update = api<UpdateBoardColumnRequest, BoardColumnResponse>(
  { auth: true, expose: true, path: "/boardColumns/:id", method: "PUT" },
  withErrorHandling("updating boardColumn", async (req) => {
    return await BoardColumnService.update(req.id, req.data);
  })
);

export const destroy = api<DeleteBoardColumnRequest, BoardColumnResponse>(
  { auth: true, expose: true, path: "/boardColumns/:id", method: "DELETE" },
  withErrorHandling("deleting boardColumn", async (req) => {
    return await BoardColumnService.delete(req.id);
  })
);
