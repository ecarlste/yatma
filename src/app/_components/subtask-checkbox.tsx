import { type Subtask } from "~/server/db/schema";
import IconCheck from "./icon-check";

type SubtaskCheckboxProps = {
  subtask: Subtask;
};

export default function SubtaskCheckbox({ subtask }: SubtaskCheckboxProps) {
  return (
    <div
      key={subtask.title}
      className={`bg-light-grey-light-bg flex items-center gap-4 rounded-sm p-3 ${
        subtask.isCompleted ? "text-black/50 line-through" : ""
      }`}
    >
      <input
        type="checkbox"
        className="peer hidden"
        checked={subtask.isCompleted}
        onChange={() => console.log("subtask checkbox clicked")}
      />
      <div className="peer-checked:border-main-purple peer-checked:bg-main-purple flex h-4 w-4 shrink-0 appearance-none items-center justify-center rounded-xs border border-[rgba(130,143,163,0.25)]">
        <IconCheck className={subtask.isCompleted ? "block" : "hidden"} />
      </div>

      <span>{subtask.title}</span>
    </div>
  );
}
