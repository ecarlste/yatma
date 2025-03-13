export type Board = {
  id: string;
  name: string;
};

export type BoardColumn = {
  id: string;
  name: string;
  boardId: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  columnId: string;
};

export type Subtask = {
  id: string;
  title: string;
  isCompleted: boolean;
  taskId: string;
};
