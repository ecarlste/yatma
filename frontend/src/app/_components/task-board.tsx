import { type BoardColumn } from "~/lib/types";
import Button from "./button";
import TaskBoardColumn from "./task-board-column";
import TaskBoardNewColumnButton from "./task-board-new-column-button";

type TaskBoardProps = {
  columns: BoardColumn[];
  activeBoardId?: string;
};

export default async function TaskBoard({
  columns,
  activeBoardId,
}: TaskBoardProps) {
  if (!activeBoardId) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <p className="font-heading-large text-medium-grey">
          Select a board to see its tasks.
        </p>
      </section>
    );
  }

  const isBoardEmpty = columns.length === 0;
  const href = `/boards/${activeBoardId}/edit`;

  if (isBoardEmpty) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <p className="font-heading-large text-medium-grey">
            This board is empty. Create a new column to get started.
          </p>
          <Button>+ Add New Column</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex gap-6 pt-6 pl-6">
      {columns.map((column) => (
        <TaskBoardColumn column={column} key={column.id} />
      ))}
      <TaskBoardNewColumnButton href={href} />
    </section>
  );
}
