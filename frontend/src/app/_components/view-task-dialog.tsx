import Dialog from "./dialog";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";
import SubtaskCheckbox from "./subtask-checkbox";
import Select from "./select";
import { type Subtask, type Task, type BoardColumn } from "~/lib/types";

type ViewTaskDialogProps = {
  task: Task;
  subtasks: Subtask[];
  columns: BoardColumn[];
};

export default function ViewTaskDialog({
  task,
  subtasks,
  columns,
}: ViewTaskDialogProps) {
  const completedSubtasksCount = subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  return (
    <Dialog>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-6">
          <h4 className="font-heading-large text-black">{task.title}</h4>
          <IconVerticalEllipsis className="shrink-0" />
        </div>
        <p className="font-body text-medium-grey">{task.description}</p>
        <div className="flex flex-col gap-4">
          <span className="font-body-medium text-medium-grey">
            {`Subtasks (${completedSubtasksCount} of ${subtasks.length})`}
          </span>
          <div className="flex flex-col gap-2">
            {subtasks.map((subtask) => {
              return (
                <SubtaskCheckbox
                  key={subtask.id}
                  subtask={subtask}
                  onStatusChange={() => console.log("subtask status changed")}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body-medium text-medium-grey">
              Current Status
            </span>
            <Select options={columns} selected={""} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
