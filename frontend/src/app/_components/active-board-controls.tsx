import Button from "./button";
import IconVerticalEllipsis from "./icon-vertical-ellipsis";
import Link from "next/link";

type ActiveBoardControlsProps = {
  boardId?: string;
  isButtonDisabled: boolean;
};

function ActiveBoardControls({
  boardId,
  isButtonDisabled,
}: ActiveBoardControlsProps) {
  return (
    <div className="flex items-center gap-6 pr-8 pb-2">
      <Link href={`/boards/${boardId}/tasks/add`}>
        <Button disabled={isButtonDisabled}>+ Add New Task</Button>
      </Link>
      <IconVerticalEllipsis className="shrink-0" />
    </div>
  );
}

export default ActiveBoardControls;
