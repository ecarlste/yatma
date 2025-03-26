"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type TaskManagerStore,
  createTaskManagerStore,
  initTaskManagerStore,
} from "~/app/_stores/task-manager-store";

export type TaskManagerStoreApi = ReturnType<typeof createTaskManagerStore>;

export const TaskManagerStoreContext = createContext<
  TaskManagerStoreApi | undefined
>(undefined);

export interface TaskManagerStoreProviderProps {
  children: ReactNode;
}

export const TaskManagerStoreProvider = ({
  children,
}: TaskManagerStoreProviderProps) => {
  const storeRef = useRef<TaskManagerStoreApi>(null);
  storeRef.current ??= createTaskManagerStore(initTaskManagerStore());

  return (
    <TaskManagerStoreContext.Provider value={storeRef.current}>
      {children}
    </TaskManagerStoreContext.Provider>
  );
};

export const useTaskManagerStore = <T,>(
  selector: (store: TaskManagerStore) => T,
): T => {
  const taskManagerStoreContext = useContext(TaskManagerStoreContext);

  if (!taskManagerStoreContext) {
    throw new Error(
      `useTaskManagerStore must be used within TaskManagerStoreProvider`,
    );
  }

  return useStore(taskManagerStoreContext, selector);
};
