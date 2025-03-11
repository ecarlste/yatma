import Button from "./button";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import TaskBoardColumn from "./task-board-column";

export default function TaskBoard() {
  const { activeBoard } = useTaskManagerStore((state) => state);

  if (!activeBoard?.columns?.length) {
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
  } else {
    return (
      <section className="flex">
        {activeBoard.columns.map((column) => (
          <TaskBoardColumn column={column} key={column.name} />
        ))}
      </section>
    );
  }
}
