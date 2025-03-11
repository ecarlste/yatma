import { BoardColumn } from "~/server/db/schema";

type TaskBoardColumnProps = {
  column: BoardColumn;
};

export default function TaskBoardColumn({ column }: TaskBoardColumnProps) {
  return (
    <div className="flex flex-col">
      <div>
        {column.name} ({column.tasks.length})
      </div>
      <div className="flex flex-col gap-4">
        {column.tasks.map((task, index) => (
          <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
}
