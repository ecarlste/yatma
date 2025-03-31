export type TaskDto = {
  id: string;
  title: string;
  description: string;
  columnId: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type TaskResponse = {
  success?: boolean;
  message?: string;
  result?: TaskDto;
};

export type TaskListResponse = {
  success?: boolean;
  message?: string;
  result: TaskDto[];
};

type TaskId = Pick<TaskDto, "id">;
type ColumnId = Pick<TaskDto, "columnId">;

export type CreateTaskDto = Omit<TaskDto, "id" | "createdAt" | "updatedAt">;
export type CreateTaskRequest = CreateTaskDto;
export type CreateManyTasksRequest = { tasks: CreateTaskDto[] };

export type ReadTasksRequest = Partial<ColumnId>;
export type ReadOneTaskRequest = TaskId;

export type UpdateTaskDto = Partial<CreateTaskDto>;
export type UpdateTaskRequest = TaskId & {
  data: UpdateTaskDto;
};

export type DeleteTaskRequest = Pick<TaskDto, "id">;
