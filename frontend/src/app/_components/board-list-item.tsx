import { type Board } from "~/server/db/schema";
import IconBoard from "./icon-board";
import Link from "next/link";

type BoardListItemProps = {
  board: Board;
  isSelected?: boolean;
};

export default function BoardListItem({
  board,
  isSelected = false,
}: BoardListItemProps) {
  const bgColor = isSelected ? "bg-main-purple" : "hover:bg-main-purple/10";
  const textColor = isSelected
    ? "text-white"
    : "text-medium-grey hover:text-main-purple";
  const cursor = isSelected ? "" : "hover:cursor-pointer";

  return (
    <Link href={`/boards/${board.id}`}>
      <div
        className={`text-medium-grey flex items-center gap-4 rounded-r-full py-4 pl-8 ${bgColor} ${textColor} ${cursor}`}
      >
        <IconBoard />
        {board.name}
      </div>
    </Link>
  );
}
