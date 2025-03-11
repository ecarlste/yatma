import { type Board } from "~/server/db/schema";
import IconBoard from "./icon-board";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";

type BoardListItemProps = {
  board: Board;
  isSelected?: boolean;
};

export default function BoardListItem({
  board,
  isSelected = false,
}: BoardListItemProps) {
  const { setActiveBoard } = useTaskManagerStore((state) => state);

  const bgColor = isSelected ? "bg-main-purple" : "hover:bg-main-purple/10";
  const textColor = isSelected
    ? "text-white"
    : "text-medium-grey hover:text-main-purple";
  const cursor = isSelected ? "" : "hover:cursor-pointer";

  return (
    <div
      className={`text-medium-grey flex items-center gap-4 rounded-r-full py-4 pl-8 ${bgColor} ${textColor} ${cursor}`}
      onClick={() => {
        setActiveBoard(board);
      }}
    >
      <IconBoard />
      {board.name}
    </div>
  );
}
