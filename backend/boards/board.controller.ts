import { api } from "encore.dev/api";
import { withErrorHandling } from "../lib/error-handling";
import BoardService from "./board.service";
import {
  BoardResponse,
  CreateBoardRequest,
  DeleteBoardRequest,
  ReadOneBoardRequest,
} from "./board.interface";

export const create = api<CreateBoardRequest, BoardResponse>(
  { expose: true, path: "/boards", method: "POST" },
  withErrorHandling("creating board", async (req) => {
    return await BoardService.create(req);
  })
);

export const read = api<void, BoardResponse>(
  { expose: true, path: "/boards", method: "GET" },
  withErrorHandling("reading boards", async () => {
    return await BoardService.find();
  })
);

export const readOne = api<ReadOneBoardRequest, BoardResponse>(
  { expose: true, path: "/boards/:id", method: "GET" },
  withErrorHandling("reading board", async (req) => {
    return await BoardService.findOne(req.id);
  })
);

export const destroy = api<DeleteBoardRequest, BoardResponse>(
  { expose: true, path: "/boards/:id", method: "DELETE" },
  withErrorHandling("deleting board", async (req) => {
    return await BoardService.delete(req.id);
  })
);
