import Image, { type StaticImageData } from "next/image";

import logoDark from "~/../public/images/logo-dark.svg";
import { getColumnsByBoardId } from "~/server/db/boards-dal";
import ActiveBoardControls from "./active-board-controls";
import { type Board } from "~/lib/types";

type HeaderProps = {
  isSidebarOpen: boolean;
  board?: Board;
};

export default async function Header({ isSidebarOpen, board }: HeaderProps) {
  let isBoardEmpty = true;
  if (board) {
    isBoardEmpty = getColumnsByBoardId(board.id).length === 0;
  }

  return (
    <header className="flex h-24 w-full items-center justify-between bg-white">
      <div
        className={`border-r-lines-light flex h-full items-center border-r-1 transition-[min-width,padding-left] duration-500 ease-in-out ${isSidebarOpen ? "min-w-75 pl-8" : "min-w-[210px] border-b-1 pl-6"}`}
      >
        <Image
          src={logoDark as StaticImageData}
          alt="Logo"
          className="mb-2 h-6 w-fit"
        />
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
        <ActiveBoardControls isButtonDisabled={isBoardEmpty} />
      </div>
    </header>
  );
}
