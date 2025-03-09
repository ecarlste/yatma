export type Board = {
  name: string;
  columns: BoardColumn[];
};

export type BoardColumn = {
  name: string;
  tasks: Task[];
};

export type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

export type Subtask = {
  title: string;
  isCompleted: boolean;
};
