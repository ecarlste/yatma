import Dialog from "./dialog";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";
import SubtaskCheckbox from "./subtask-checkbox";

export default function ViewTaskDialog() {
  const { viewedTask, setViewedTask } = useTaskManagerStore((state) => state);

  if (!viewedTask) {
    return null;
  }

  const completedSubtasksCount = viewedTask.subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

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
            {`Subtasks (${completedSubtasksCount} of ${viewedTask.subtasks.length})`}
          </span>
          <div className="flex flex-col gap-2">
            {viewedTask.subtasks.map((subtask) => {
              return <SubtaskCheckbox key={subtask.id} subtask={subtask} />;
            })}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body-medium text-medium-grey">
              Current Status
            </span>
            <span className="font-heading-medium text-black">
              {viewedTask.columnId}
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
