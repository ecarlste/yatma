import Dialog from "./dialog";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";
import SubtaskCheckbox from "./subtask-checkbox";

export default function ViewTaskDialog() {
  const { activeBoard, boards, viewedTask, setViewedTask } =
    useTaskManagerStore((state) => state);

  if (!viewedTask) {
    return null;
  }

  const completedSubtasksCount = viewedTask.subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length;

  const activeBoardColumns = boards.find(
    (board) => board.id === activeBoard?.id,
  )?.columns;

  const columnNames = activeBoardColumns?.map((column) => column.name);

  console.log("columnNames", columnNames);

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
            <select className="font-body border-[rgba(130, 143, 163, 0.25)] h-10 rounded-sm border px-4 text-black">
              {columnNames?.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
