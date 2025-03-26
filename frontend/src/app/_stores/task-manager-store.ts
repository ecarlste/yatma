import { createStore } from "zustand/vanilla";
import { type Task } from "~/lib/types";

export type TaskManagerState = {
  activeBoardId: string | null;
  viewedTask: Task | null;
};

export type TaskManagerActions = {
  setActiveBoard: (boardId: string) => void;
  setViewedTask: (task: Task | null) => void;
};

export const initTaskManagerStore = () => {
  return {
    activeBoardId: null,
    viewedTask: null,
  };
};

export type TaskManagerStore = TaskManagerState & TaskManagerActions;

export const defaultInitState: TaskManagerState = {
  activeBoardId: null,
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
