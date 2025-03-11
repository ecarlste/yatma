import { createStore } from "zustand/vanilla";
import { Board } from "~/server/db/schema";
import boardsData from "~/server/db/data.json";

export type TaskManagerState = {
  activeBoard: Board;
};

export type TaskManagerActions = {
  setActiveBoard: (board: Board) => void;
};

export const initTaskManagerStore = () => {
  return {
    activeBoard: boardsData.boards[0] as Board,
  };
};

export type TaskManagerStore = TaskManagerState & TaskManagerActions;

export const defaultInitState: TaskManagerState = {
  activeBoard: {
    name: "My First Board",
    columns: [],
  },
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
  }));
};
