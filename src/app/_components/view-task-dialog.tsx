"use client";

import Dialog from "./dialog";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";
import SubtaskCheckbox from "./subtask-checkbox";
import Select from "./select";
import {
  getColumnByTaskId,
  getColumnsByBoardId,
  getSubtasksByTaskId,
  updateTaskById,
} from "~/server/db/boards-dal";
import { useEffect, useState } from "react";
import { type BoardColumn } from "~/server/db/schema";

export default function ViewTaskDialog() {
  const { activeBoardId, viewedTask, setViewedTask } = useTaskManagerStore(
    (state) => state,
  );
  const [selectedColumn, setSelectedColumn] = useState<BoardColumn | null>(
    null,
  );

  useEffect(() => {
    if (viewedTask) {
      setSelectedColumn(getColumnByTaskId(viewedTask.id));
    }
  }, [viewedTask]);

  if (!viewedTask) {
    return null;
  }

  const subtasks = getSubtasksByTaskId(viewedTask.id);

  const completedSubtasksCount = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  const activeBoardColumns = getColumnsByBoardId(activeBoardId);

  function handleSelectChange(option: BoardColumn) {
    setSelectedColumn(option);

    if (!viewedTask) {
      return;
    }

    const updatedTask = updateTaskById(viewedTask.id, {
      ...viewedTask,
      columnId: option.id,
    });

    if (!updatedTask) {
      return;
    }
    setViewedTask(updatedTask);
  }

  return (
    <Dialog onClose={() => setViewedTask(null)}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-6">
          <h4 className="font-heading-large text-black">{viewedTask.title}</h4>
          <IconVerticalEllipsis className="shrink-0" />
        </div>
        <p className="font-body text-medium-grey">{viewedTask.description}</p>
        <div className="flex flex-col gap-4">
          <span className="font-body-medium text-medium-grey">
            {`Subtasks (${completedSubtasksCount} of ${subtasks.length})`}
          </span>
          <div className="flex flex-col gap-2">
            {subtasks.map((subtask) => {
              return <SubtaskCheckbox key={subtask.id} subtask={subtask} />;
            })}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body-medium text-medium-grey">
              Current Status
            </span>
            <Select
              options={activeBoardColumns}
              selected={selectedColumn?.name ?? ""}
              onChange={handleSelectChange}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
