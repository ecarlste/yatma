import { eq } from "drizzle-orm";
import { db } from "./task.db";
import {
  TaskResponse,
  CreateTaskDto,
  UpdateTaskDto,
  TaskListResponse,
} from "./task.interface";
import { tasksTable } from "./task.schema";
import { boardColumns } from "~encore/clients";
import { APIError } from "encore.dev/api";
import { executeQuery } from "../lib/db-utils";

const TaskService = {
  create: async (task: CreateTaskDto): Promise<TaskResponse> => {
    const column = await boardColumns.readOne({ id: task.columnId });
    if (!column.success) {
      throw APIError.notFound(`Column with ID '${task.columnId}' not found`);
    }

    const [createdTask] = await executeQuery(
      db.insert(tasksTable).values(task).returning(),
      "create task"
    );

    return {
      success: true,
      result: createdTask,
    };
  },

  createMany: async (tasks: CreateTaskDto[]): Promise<TaskListResponse> => {
    if (tasks.length === 0) {
      return { success: true, result: [] };
    }

    const columnId = tasks[0].columnId;
    const mismatched = tasks.some((task) => task.columnId !== columnId);
    if (mismatched) {
      throw APIError.invalidArgument(
        "All tasks must belong to the same column"
      );
    }

    const column = await boardColumns.readOne({ id: columnId });
    if (!column.success) {
      throw APIError.notFound(`Column with ID '${columnId}' not found`);
    }

    const createdTasks = await executeQuery(
      db.insert(tasksTable).values(tasks).returning(),
      "create multiple tasks"
    );

    return {
      success: true,
      result: createdTasks,
    };
  },

  find: async (): Promise<TaskListResponse> => {
    const tasks = await executeQuery(
      db.select().from(tasksTable),
      "find tasks"
    );

    return {
      success: true,
      result: tasks,
    };
  },

  findOne: async (id: string): Promise<TaskResponse> => {
    const [task] = await executeQuery(
      db.select().from(tasksTable).where(eq(tasksTable.id, id)).limit(1),
      "find one task"
    );

    if (!task) {
      throw APIError.notFound(`Task with ID '${id}' not found`);
    }

    return {
      success: true,
      result: task,
    };
  },

  update: async (id: string, data: UpdateTaskDto): Promise<TaskResponse> => {
    if (data.columnId) {
      const column = await boardColumns.readOne({ id: data.columnId });
      if (!column.success) {
        throw APIError.notFound(`Column with ID '${data.columnId}' not found`);
      }
    }

    const [updatedTask] = await executeQuery(
      db.update(tasksTable).set(data).where(eq(tasksTable.id, id)).returning(),
      "update task"
    );

    if (!updatedTask) {
      throw APIError.notFound(`Task with ID '${id}' not found`);
    }

    return {
      success: true,
      result: updatedTask,
    };
  },

  delete: async (id: string): Promise<TaskResponse> => {
    const [deletedTask] = await executeQuery(
      db.delete(tasksTable).where(eq(tasksTable.id, id)).returning(),
      "delete task"
    );

    if (!deletedTask) {
      throw APIError.notFound(`Task with ID '${id}' not found`);
    }

    return {
      success: true,
      result: deletedTask,
    };
  },
};

export default TaskService;
