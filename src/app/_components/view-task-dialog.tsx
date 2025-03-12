import Dialog from "./dialog";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";

export default function ViewTaskDialog() {
  const { viewedTask, setViewedTask } = useTaskManagerStore((state) => state);

  if (!viewedTask) {
    return null;
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
            {"Subtasks ("}
            {
              viewedTask.subtasks.filter((subtask) => subtask.isCompleted)
                .length
            }{" "}
            of {viewedTask.subtasks.length}
            {")"}
          </span>
          <div className="flex flex-col gap-2">
            {viewedTask.subtasks.map((subtask) => {
              return (
                <div
                  key={subtask.title}
                  className={`bg-light-grey-light-bg flex items-center gap-4 rounded-sm p-3 ${
                    subtask.isCompleted ? "text-black/50 line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={subtask.isCompleted}
                    onChange={() => {}}
                    className="checked:border-main-purple checked:bg-main-purple h-4 w-4 shrink-0 appearance-none rounded-xs border border-[rgba(130,143,163,0.25)]"
                  />
                  <span>{subtask.title}</span>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body-medium text-medium-grey">
              Current Status
            </span>
            <span className="font-heading-medium text-black">
              {viewedTask.status}
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
