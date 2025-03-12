import { createStore } from "zustand/vanilla";
import { type Task, type Board, type Subtask } from "~/server/db/schema";
import { boards } from "~/server/db/data/boards";

export type TaskManagerState = {
  activeBoard: Board | null;
  viewedTask: Task | null;
  boards: Board[];
};

export type TaskManagerActions = {
  setActiveBoard: (board: Board | null) => void;
  setViewedTask: (task: Task | null) => void;
  toggleSubtask: (subtask: Subtask) => void;
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
    toggleSubtask: (subtask) =>
      set((state) => {
        const boards = [...state.boards];

        const { boardIndex, columnIndex, taskIndex, subtaskIndex } =
          getIndicesRelatedToSubtaskId(boards, subtask.id);

        const updatedSubtask = {
          ...subtask,
          isCompleted: !subtask.isCompleted,
        };

        if (boards[boardIndex]?.columns[columnIndex]?.tasks[taskIndex]) {
          boards[boardIndex].columns[columnIndex].tasks[taskIndex].subtasks[
            subtaskIndex
          ] = updatedSubtask;
        }

        return { boards };
      }),
  }));
};

function getIndicesRelatedToSubtaskId(
  boards: Board[],
  subtaskId: string,
): {
  boardIndex: number;
  columnIndex: number;
  taskIndex: number;
  subtaskIndex: number;
} {
  for (let bIndex = 0; bIndex < boards.length; bIndex++) {
    const board = boards[bIndex];
    const columns = board?.columns ?? [];

    for (let cIndex = 0; cIndex < columns.length; cIndex++) {
      const column = columns[cIndex];
      const tasks = column?.tasks ?? [];

      for (let tIndex = 0; tIndex < tasks.length; tIndex++) {
        const task = tasks[tIndex];
        const subtasks = task?.subtasks ?? [];

        for (let sIndex = 0; sIndex < subtasks.length; sIndex++) {
          const subtask = subtasks[sIndex];

          if (subtask?.id === subtaskId) {
            return {
              boardIndex: bIndex,
              columnIndex: cIndex,
              taskIndex: tIndex,
              subtaskIndex: sIndex,
            };
          }
        }
      }
    }
  }

  return {
    boardIndex: -1,
    columnIndex: -1,
    taskIndex: -1,
    subtaskIndex: -1,
  };
}
