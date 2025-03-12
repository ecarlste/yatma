export type Board = {
  id: string;
  name: string;
  columns: BoardColumn[];
};

export type BoardColumn = {
  id: string;
  name: string;
  tasks: Task[];
  boardId: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  columnId: string;
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
  taskId: string;
};
