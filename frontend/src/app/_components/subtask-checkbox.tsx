"use client";

import { type Subtask } from "~/server/db/schema";
import IconCheck from "./icon-check";
import { setSubtaskCompleted } from "~/server/db/boards-dal";
import { useState } from "react";

type SubtaskCheckboxProps = {
  subtask: Subtask;
};

export default function SubtaskCheckbox({ subtask }: SubtaskCheckboxProps) {
  const [isCompleted, setIsCompleted] = useState(subtask.isCompleted);

  function handleClick(subtask: Subtask) {
    setSubtaskCompleted(subtask.id, !subtask.isCompleted);
    setIsCompleted((prev) => !prev);
  }

  return (
    <div
      key={subtask.id}
      className={`bg-light-grey-light-bg flex items-center gap-4 rounded-sm p-3 ${
        isCompleted ? "text-black/50 line-through" : ""
      }`}
      onClick={() => handleClick(subtask)}
    >
      <input
        type="checkbox"
        className="peer hidden"
        checked={isCompleted}
        onChange={() => console.log("subtask checkbox changed")}
      />
      <div className="peer-checked:border-main-purple peer-checked:bg-main-purple flex h-4 w-4 shrink-0 appearance-none items-center justify-center rounded-xs border border-[rgba(130,143,163,0.25)]">
        <IconCheck className={isCompleted ? "block" : "hidden"} />
      </div>

      <span>{subtask.title}</span>
    </div>
  );
}
