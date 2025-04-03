"use client";

import { type BoardColumn, type Task } from "~/lib/types";
import Dialog from "./dialog";
import { useRouter } from "next/navigation";

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

  return <Dialog onClose={handleClose}>Task Form Dialog</Dialog>;
}

export default TaskFormDialog;
