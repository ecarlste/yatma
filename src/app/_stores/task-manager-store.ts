import { createStore } from "zustand/vanilla";
import { getBoards } from "~/server/db/boards-dal";
import { type Task } from "~/server/db/schema";

export type TaskManagerState = {
  activeBoardId: string;
  viewedTask: Task | null;
};

export type TaskManagerActions = {
  setActiveBoard: (boardId: string) => void;
  setViewedTask: (task: Task | null) => void;
};

export const initTaskManagerStore = () => {
  return {
    activeBoardId: getBoards()[0]?.id ?? "",
    viewedTask: null,
  };
};

export type TaskManagerStore = TaskManagerState & TaskManagerActions;

export const defaultInitState: TaskManagerState = {
  activeBoardId: getBoards()[0]?.id ?? "",
  viewedTask: null,
};

export const createTaskManagerStore = (
  initState: TaskManagerState = defaultInitState,
) => {
  return createStore<TaskManagerStore>()((set) => ({
    ...initState,
    setActiveBoard: (boardId) =>
      set(() => ({
        activeBoardId: boardId,
      })),
    setViewedTask: (task) =>
      set(() => ({
        viewedTask: task,
      })),
  }));
};
