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
  result?: TaskDto | TaskDto[];
};

type TaskId = Pick<TaskDto, "id">;

export type CreateTaskDto = Omit<TaskDto, "id" | "createdAt" | "updatedAt">;
export type CreateTaskRequest = CreateTaskDto;
export type CreateManyTasksRequest = { tasks: CreateTaskDto[] };

export type ReadOneTaskRequest = TaskId;

export type UpdateTaskDto = Partial<CreateTaskDto>;
export type UpdateTaskRequest = TaskId & {
  data: UpdateTaskDto;
};

export type DeleteTaskRequest = Pick<TaskDto, "id">;

export const taskNotFoundResponse = {
  success: false,
  message: "Board not found",
};
