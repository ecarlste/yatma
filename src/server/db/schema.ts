export type Board = {
  id: string;
  name: string;
  columns: BoardColumn[];
};

export type BoardColumn = {
  id: string;
  name: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
};
