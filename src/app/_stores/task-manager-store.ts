import { createStore } from "zustand/vanilla";
import { type Task, type Board } from "~/server/db/schema";
import { boards } from "~/server/db/data/boards";

export type TaskManagerState = {
  activeBoard: Board | null;
  viewedTask: Task | null;
  boards: Board[];
};

export type TaskManagerActions = {
  setActiveBoard: (board: Board | null) => void;
  setViewedTask: (task: Task | null) => void;
};

export const initTaskManagerStore = () => {
  return {
    activeBoard: boards[0] ?? null,
    viewedTask: null,
    boards: boards,
  };
};

export type TaskManagerStore = TaskManagerState & TaskManagerActions;

export const defaultInitState: TaskManagerState = {
  activeBoard: null,
  viewedTask: null,
  boards: [],
};

export const createTaskManagerStore = (
  initState: TaskManagerState = defaultInitState,
) => {
  return createStore<TaskManagerStore>()((set) => ({
    ...initState,
    setActiveBoard: (board) =>
      set(() => ({
        activeBoard: board,
      })),
    setViewedTask: (task) =>
      set(() => ({
        viewedTask: task,
      })),
  }));
};
