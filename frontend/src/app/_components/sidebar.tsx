"use client";

import { type Board } from "~/lib/types";
import BoardListItem from "./board-list-item";
import IconBoard from "./icon-board";
import IconDarkTheme from "./icon-dark-theme";
import IconLightTheme from "./icon-light-theme";
import Switch from "./switch";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import { SideBarVisibilityToggle } from "./side-bar-visibility-toggle";

type SidebarProps = {
  boards: Board[];
  activeBoardId: string | null;
};

export default function Sidebar({ boards, activeBoardId }: SidebarProps) {
  const { isSidebarOpen } = useTaskManagerStore((state) => state);

  return (
    <aside
      className={`border-r-lines-light flex min-w-75 flex-col gap-14 border-r-1 bg-white pt-4 pb-12 transition-[margin] duration-500 ${
        isSidebarOpen ? "ml-0" : "ml-[-300px]"
      }`}
    >
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-5 pr-6">
          <div className="leading text-medium-grey pl-8 tracking-[2.4px] uppercase">
            All Boards ({boards.length})
          </div>
          <div className="flex flex-col">
            {boards.map((board) => (
              <BoardListItem
                board={board}
                key={board.id}
                isSelected={board.id === activeBoardId}
              />
            ))}
            <div className="text-main-purple hover:text-main-purple-hover flex items-center gap-4 py-4 pl-8 hover:cursor-pointer">
              <IconBoard />+ Create New Board
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pr-6">
          <div className="bg-light-grey-light-bg ml-6 flex h-12 w-auto items-center justify-center gap-4 rounded-md">
            <IconLightTheme />
            <Switch />
            <IconDarkTheme />
          </div>
          <SideBarVisibilityToggle />
        </div>
      </div>
    </aside>
  );
}
