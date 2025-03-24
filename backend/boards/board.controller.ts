import { api } from "encore.dev/api";
import { withErrorHandling } from "../lib/error-handling";
import BoardService from "./board.service";
import {
  BoardResponse,
  CreateBoardRequest,
  CreateManyBoardsRequest,
  DeleteBoardRequest,
  ReadOneBoardRequest,
  UpdateBoardRequest,
} from "./board.interface";

export const create = api<CreateBoardRequest, BoardResponse>(
  { auth: true, expose: true, path: "/boards", method: "POST" },
  withErrorHandling("creating board", async (req) => {
    return await BoardService.create(req);
  })
);

export const createMany = api<CreateManyBoardsRequest, BoardResponse>(
  { auth: true, expose: true, path: "/boards/bulk", method: "POST" },
  withErrorHandling("creating boards", async (req) => {
    return await BoardService.createMany(req.boards);
  })
);

export const read = api<void, BoardResponse>(
  { auth: true, expose: true, path: "/boards", method: "GET" },
  withErrorHandling("reading boards", async () => {
    return await BoardService.find();
  })
);

export const readOne = api<ReadOneBoardRequest, BoardResponse>(
  { auth: true, expose: true, path: "/boards/:id", method: "GET" },
  withErrorHandling("reading board", async (req) => {
    return await BoardService.findOne(req.id);
  })
);

export const update = api<UpdateBoardRequest, BoardResponse>(
  { auth: true, expose: true, path: "/boards/:id", method: "PUT" },
  withErrorHandling("updating board", async (req) => {
    return await BoardService.update(req.id, req.data);
  })
);

export const destroy = api<DeleteBoardRequest, BoardResponse>(
  { auth: true, expose: true, path: "/boards/:id", method: "DELETE" },
  withErrorHandling("deleting board", async (req) => {
    return await BoardService.delete(req.id);
  })
);
