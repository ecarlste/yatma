import { type BoardColumn, type Task, type Subtask } from "~/lib/types";
import { createColumns } from "./data/columns";
import { createTasks } from "./data/tasks";
import { createSubtasks } from "./data/subtasks";
import { readAllBoards, readBoardWithId } from "../dto/boards-dto";

const columns: BoardColumn[] = createColumns();
const tasks: Task[] = createTasks();
const subtasks: Subtask[] = createSubtasks();

// Boards

export function getBoards() {
  return readAllBoards();
}

export function getBoardById(boardId: string) {
  return readBoardWithId(boardId);
}

// Columns

export function getColumnByTaskId(taskId: string) {
  const task = getTaskById(taskId);

  const column = columns.find((column) => column.id === task.columnId);
  if (!column) {
    const errorMessage = `Column with ID ${task.columnId} not found.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return column;
}

export function getColumnsByBoardId(boardId: string) {
  return columns.filter((column) => column.boardId === boardId);
}

// Tasks

export function getTaskById(taskId: string): Task {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    const errorMessage = `Task with ID ${taskId} not found.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return task;
}

export function getTasksByColumnId(columnId: string): Task[] {
  return tasks.filter((task) => task.columnId === columnId);
}

export function updateTaskById(
  taskId: string,
  updatedTask: Partial<Task>,
): Task {
  const task = getTaskById(taskId);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  tasks[taskIndex] = {
    ...task,
    ...updatedTask,
  };

  return tasks[taskIndex];
}

// Subtasks

export function getSubtaskById(subtaskId: string): Subtask {
  const subtask = subtasks.find((subtask) => subtask.id === subtaskId);
  if (!subtask) {
    const errorMessage = `Subtask with ID ${subtaskId} not found.`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return subtask;
}

export function getSubtasksByTaskId(taskId: string): Subtask[] {
  return subtasks.filter((subtask) => subtask.taskId === taskId);
}

export function setSubtaskCompleted(subtaskId: string, isCompleted: boolean) {
  const subtask = getSubtaskById(subtaskId);
  if (!subtask) {
    console.error(`Subtask with ID ${subtaskId} not found.`);
    return;
  }

  subtask.isCompleted = isCompleted;
}
