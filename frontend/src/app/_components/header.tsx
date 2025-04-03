"use client";

import ActiveBoardControls from "./active-board-controls";
import { type Board } from "~/lib/types";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import Logo from "./logo";

type HeaderProps = {
  board?: Board;
  isBoardEmpty?: boolean;
};

export default function Header({ board, isBoardEmpty = true }: HeaderProps) {
  const { isSidebarOpen } = useTaskManagerStore((state) => state);

  return (
    <header className="flex h-24 w-full items-center justify-between bg-white">
      <div
        className={`border-r-lines-light flex h-full items-center border-r-1 transition-[min-width,padding-left] duration-500 ease-in-out ${isSidebarOpen ? "min-w-75 pl-8" : "min-w-[210px] border-b-1 pl-6"}`}
      >
        <Logo />
      </div>
      <div
        className={`border-b-lines-light flex h-full w-full items-center ${board ? "justify-between" : "justify-end"} border-b-1`}
      >
        {board && (
          <h1
            className={`font-heading pb-2 text-black ${isSidebarOpen ? "pl-8" : "pl-6"}`}
          >
            {board.name}
          </h1>
        )}
        <ActiveBoardControls
          boardId={board?.id}
          isButtonDisabled={isBoardEmpty}
        />
      </div>
    </header>
  );
}
