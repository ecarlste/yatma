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
import { ColumnNotFoundError, TaskNotFoundError } from "../lib/error-types";

const TaskService = {
  create: async (task: CreateTaskDto): Promise<TaskResponse> => {
    const column = await boardColumns.readOne({ id: task.columnId });
    if (!column.success) {
      throw ColumnNotFoundError(task.columnId);
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
      throw ColumnNotFoundError(columnId);
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

  find: async (columnId?: string): Promise<TaskListResponse> => {
    const query = columnId
      ? db.select().from(tasksTable).where(eq(tasksTable.columnId, columnId))
      : db.select().from(tasksTable);
    const tasks = await executeQuery(query, "find tasks");

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
      throw TaskNotFoundError(id);
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
        throw ColumnNotFoundError(data.columnId);
      }
    }

    const [updatedTask] = await executeQuery(
      db.update(tasksTable).set(data).where(eq(tasksTable.id, id)).returning(),
      "update task"
    );

    if (!updatedTask) {
      throw TaskNotFoundError(id);
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
      throw TaskNotFoundError(id);
    }

    return {
      success: true,
      result: deletedTask,
    };
  },
};

export default TaskService;
