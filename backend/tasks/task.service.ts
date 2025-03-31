import { eq } from "drizzle-orm";
import { db } from "./task.db";
import {
  TaskResponse,
  CreateTaskDto,
  UpdateTaskDto,
  taskNotFoundResponse,
} from "./task.interface";
import { tasksTable } from "./task.schema";

const TaskService = {
  create: async (task: CreateTaskDto): Promise<TaskResponse> => {
    const [createdTask] = await db.insert(tasksTable).values(task).returning();

    return {
      success: true,
      result: createdTask,
    };
  },

  createMany: async (tasks: CreateTaskDto[]): Promise<TaskResponse> => {
    const createdTasks = await db.insert(tasksTable).values(tasks).returning();

    return {
      success: true,
      result: createdTasks,
    };
  },

  find: async (): Promise<TaskResponse> => {
    const tasks = await db.select().from(tasksTable);

    return {
      success: true,
      result: tasks,
    };
  },

  findOne: async (id: string): Promise<TaskResponse> => {
    const [task] = await db
      .select()
      .from(tasksTable)
      .where(eq(tasksTable.id, id))
      .limit(1);

    if (!task) {
      return taskNotFoundResponse;
    }

    return {
      success: true,
      result: task,
    };
  },

  update: async (id: string, data: UpdateTaskDto): Promise<TaskResponse> => {
    const [updatedTask] = await db
      .update(tasksTable)
      .set(data)
      .where(eq(tasksTable.id, id))
      .returning();

    if (!updatedTask) {
      return taskNotFoundResponse;
    }

    return {
      success: true,
      result: updatedTask,
    };
  },

  delete: async (id: string): Promise<TaskResponse> => {
    const [deletedTask] = await db
      .delete(tasksTable)
      .where(eq(tasksTable.id, id))
      .returning();

    if (!deletedTask) {
      return taskNotFoundResponse;
    }

    return {
      success: true,
      result: deletedTask,
    };
  },
};

export default TaskService;
