import { api } from "encore.dev/api";
import { withErrorHandling } from "../lib/error-handling";
import BoardService from "./board.service";
import { BoardResponse, CreateBoardRequest } from "./board.interface";

export const create = api<CreateBoardRequest, BoardResponse>(
  { expose: true, path: "/boards", method: "POST" },
  withErrorHandling("creating board", async (req) => {
    return await BoardService.create(req);
  })
);
