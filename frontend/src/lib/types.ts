import { type boards } from "~/server/generated/encore-backend-client";

export type Board = boards.BoardDto;

export type BoardColumn = {
  id: string;
  name: string;
  boardId: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  columnId: string;
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
  taskId: string;
};
