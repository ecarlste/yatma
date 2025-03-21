"use client";

import Image, { type StaticImageData } from "next/image";
import Button from "./button";

import logoDark from "~/../public/images/logo-dark.svg";
import iconVerticalEllipsis from "~/../public/images/icon-vertical-ellipsis.svg";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import { getBoardById, getColumnsByBoardId } from "~/server/db/boards-dal";

type HeaderProps = {
  isSidebarOpen: boolean;
};

export default function Header({ isSidebarOpen }: HeaderProps) {
  const { activeBoardId } = useTaskManagerStore((state) => state);

  const activeBoard = getBoardById(activeBoardId);
  if (!activeBoard) {
    return null;
  }

  const isBoardEmpty = getColumnsByBoardId(activeBoardId).length === 0;

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

      <div className="border-b-lines-light flex h-full w-full items-center justify-between border-b-1">
        <h1
          className={`font-heading pb-2 text-black ${isSidebarOpen ? "pl-8" : "pl-6"}`}
        >
          {activeBoard.name}
        </h1>
        <div className="flex items-center gap-6 pr-8 pb-2">
          <Button disabled={isBoardEmpty}>+ Add New Task</Button>
          <Image
            src={iconVerticalEllipsis as StaticImageData}
            alt="Vertical Ellipsis"
            className="h-5"
          />
        </div>
      </div>
    </header>
  );
}
