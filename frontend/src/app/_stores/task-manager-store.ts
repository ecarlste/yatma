import { createStore } from "zustand/vanilla";

export type TaskManagerState = {
  isSidebarOpen: boolean;
};

export type TaskManagerActions = {
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export const initTaskManagerStore = () => {
  return defaultInitState;
};

export type TaskManagerStore = TaskManagerState & TaskManagerActions;

export const defaultInitState: TaskManagerState = {
  isSidebarOpen: true,
};

export const createTaskManagerStore = (
  initState: TaskManagerState = defaultInitState,
) => {
  return createStore<TaskManagerStore>()((set) => ({
    ...initState,
    setIsSidebarOpen: (isOpen) =>
      set(() => ({
        isSidebarOpen: isOpen,
      })),
  }));
};
