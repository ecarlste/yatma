"use client";

import { type BoardColumn, type Task } from "~/lib/types";
import Dialog from "./dialog";
import { useRouter } from "next/navigation";
import DialogContent from "./dialog-content";
import DialogTitle from "./dialog-title";
import DialogSection from "./dialog-section";
import DialogHeading from "./dialog-heading";
import DialogInput from "./dialog-input";
import Button from "../button";

type TaskFormDialogProps = {
  task?: Task;
  columns?: BoardColumn[];
  closeDialogHref: string;
};

function TaskFormDialog({
  task,
  columns = [],
  closeDialogHref,
}: TaskFormDialogProps) {
  const router = useRouter();

  console.log("task:", task);
  console.log("columns:", columns);
  console.log("closeDialogHref:", closeDialogHref);

  function handleClose() {
    router.push(closeDialogHref);
  }

  return (
    <Dialog onClose={handleClose}>
      <DialogContent>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogSection>
          <DialogHeading>Title</DialogHeading>
          <DialogInput
            id="title"
            placeholder="e.g. A brief summary of this task"
          />
        </DialogSection>
        <DialogSection>
          <DialogHeading>Description</DialogHeading>
          <DialogInput
            id="description"
            placeholder="e.g. A detailed description of what needs to be done."
          />
        </DialogSection>
        <DialogSection>
          <DialogHeading>Subtasks</DialogHeading>
          <Button
            type="button"
            variant="secondary"
            size="small"
            className="w-full"
          >
            + Add New Subtask
          </Button>
        </DialogSection>
        <DialogSection>
          <DialogHeading>Status</DialogHeading>
        </DialogSection>
        <Button type="submit" size="small" className="w-full">
          Create Task
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default TaskFormDialog;
