import { type BoardColumn } from "~/lib/types";
import TaskBoardTaskCard from "./task-board-task-card";
import { getTasksByColumnId } from "~/server/db/boards-dal";

type TaskBoardColumnProps = {
  column: BoardColumn;
};

export default function TaskBoardColumn({ column }: TaskBoardColumnProps) {
  const tasks = getTasksByColumnId(column.id);

  return (
    <div className="flex w-70 shrink-0 flex-col gap-6">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="mt-[-1px] text-cyan-500"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
        </svg>
        <h2 className="font-heading-small text-medium-grey uppercase">
          {column.name} ({tasks.length})
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {tasks.map((task) => (
          <TaskBoardTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
