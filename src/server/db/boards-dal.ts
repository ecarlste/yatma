import { type Board, type Subtask } from "./schema";
import { createBoards } from "./data/boards";

const boards: Board[] = createBoards();

export function getBoards() {
  return [...boards];
}

export function getBoardById(boardId: string) {
  return boards.find((board) => board.id === boardId);
}

export function getColumnsByBoardId(boardId: string) {
  return boards.find((board) => board.id === boardId)?.columns ?? [];
}

export function getSubtaskById(subtaskId: string): Subtask | null {
  let subtaskFound = null;

  boards.forEach((board) => {
    board.columns.forEach((column) => {
      column.tasks.forEach((task) => {
        task.subtasks.forEach((subtask) => {
          if (subtask.id === subtaskId) {
            subtaskFound = subtask;
          }
        });
      });
    });
  });

  return subtaskFound;
}

export function setSubtaskCompleted(subtaskId: string, isCompleted: boolean) {
  const subtask = getSubtaskById(subtaskId);
  if (!subtask) {
    console.error(`Subtask with ID ${subtaskId} not found.`);
    return;
  }

  subtask.isCompleted = isCompleted;
}
