import { api } from "encore.dev/api";
import { withErrorHandling } from "../lib/error-handling";
import TaskService from "./task.service";
import {
  TaskResponse,
  CreateTaskRequest,
  CreateManyTasksRequest,
  DeleteTaskRequest,
  ReadOneTaskRequest,
  UpdateTaskRequest,
} from "./task.interface";

export const create = api<CreateTaskRequest, TaskResponse>(
  { auth: true, expose: true, path: "/tasks", method: "POST" },
  withErrorHandling("creating task", async (req) => {
    return await TaskService.create(req);
  })
);

export const createMany = api<CreateManyTasksRequest, TaskResponse>(
  { auth: true, expose: true, path: "/tasks/bulk", method: "POST" },
  withErrorHandling("creating tasks", async (req) => {
    return await TaskService.createMany(req.tasks);
  })
);

export const read = api<void, TaskResponse>(
  { auth: true, expose: true, path: "/tasks", method: "GET" },
  withErrorHandling("reading tasks", async () => {
    return await TaskService.find();
  })
);

export const readOne = api<ReadOneTaskRequest, TaskResponse>(
  { auth: true, expose: true, path: "/tasks/:id", method: "GET" },
  withErrorHandling("reading task", async (req) => {
    return await TaskService.findOne(req.id);
  })
);

export const update = api<UpdateTaskRequest, TaskResponse>(
  { auth: true, expose: true, path: "/tasks/:id", method: "PUT" },
  withErrorHandling("updating task", async (req) => {
    return await TaskService.update(req.id, req.data);
  })
);

export const destroy = api<DeleteTaskRequest, TaskResponse>(
  { auth: true, expose: true, path: "/tasks/:id", method: "DELETE" },
  withErrorHandling("deleting task", async (req) => {
    return await TaskService.delete(req.id);
  })
);
