import Button from "./button";
import TaskBoardColumn from "./task-board-column";
import { getBoardById, getColumnsByBoardId } from "~/server/db/boards-dal";

export default async function TaskBoard() {
  const activeBoardId = null;

  if (!activeBoardId) {
    return (
      <section className="flex flex-1 items-center justify-center">
        <p className="font-heading-large text-medium-grey">
          Select a board to see its tasks.
        </p>
      </section>
    );
  }

  const activeBoard = await getBoardById(activeBoardId);
  if (!activeBoard) {
    return null;
  }

  const columns = getColumnsByBoardId(activeBoardId);
  const isBoardEmpty = columns.length === 0;

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
    </section>
  );
}
