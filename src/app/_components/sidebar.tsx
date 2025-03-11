import { type Board } from "~/server/db/schema";
import BoardListItem from "./board-list-item";
import IconBoard from "./icon-board";
import IconDarkTheme from "./icon-dark-theme";
import IconHideSidebar from "./icon-hide-sidebar";
import IconLightTheme from "./icon-light-theme";
import IconShowSidebar from "./icon-show-sidebar";
import Switch from "./switch";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";

type SidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
  boards: Board[];
};

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  boards,
}: SidebarProps) {
  const { activeBoard } = useTaskManagerStore((state) => state);

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
                key={board.name}
                isSelected={board.name === activeBoard.name}
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
          <div className="flex w-full">
            <div
              className="text-medium-grey font-heading-medium hover:bg-main-purple/10 hover:text-main-purple mr-[-100] flex h-12 w-full items-center gap-4 rounded-r-full pl-8 hover:cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              <IconHideSidebar />
              Hide Sidebar
            </div>
            <div
              className={`bg-main-purple hover:bg-main-purple-hover relative left-31 flex h-full w-14 items-center justify-center rounded-r-full text-white hover:cursor-pointer ${isSidebarOpen ? "hidden" : "block"}`}
              onClick={() => setIsSidebarOpen(true)}
            >
              <IconShowSidebar />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
