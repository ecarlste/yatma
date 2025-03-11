import { Board } from "~/server/db/schema";
import Button from "./button";

type TaskBoardProps = {
  board?: Board;
};

export default function TaskBoard({ board }: TaskBoardProps) {
  if (!board?.columns?.length) {
    return (
      <div className="flex flex-col items-center gap-8">
        <p className="font-heading-large text-medium-grey">
          This board is empty. Create a new column to get started.
        </p>
        <Button>+ Add New Column</Button>
      </div>
    );
  } else {
    return <div>Board with items</div>;
  }
}
