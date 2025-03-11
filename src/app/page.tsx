"use client";

import Image, { type StaticImageData } from "next/image";
import Button from "./_components/button";

import logoDark from "~/../public/images/logo-dark.svg";
import iconVerticalEllipsis from "~/../public/images/icon-vertical-ellipsis.svg";

import data from "~/server/db/data.json";
import BoardListItem from "./_components/board-list-item";
import IconBoard from "./_components/icon-board";
import IconLightTheme from "./_components/icon-light-theme";
import IconDarkTheme from "./_components/icon-dark-theme";
import Switch from "./_components/switch";
import IconHideSidebar from "./_components/icon-hide-sidebar";
import { useState } from "react";
import IconShowSidebar from "./_components/icon-show-sidebar";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <main className="flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <header className="flex h-24 w-full items-center justify-between bg-white">
          <div
            className={`border-r-lines-light flex h-full items-center border-r-1 transition-[min-width,padding-left] duration-500 ease-in-out ${isSidebarVisible ? "min-w-75 pl-8" : "min-w-[210px] border-b-1 pl-6"}`}
          >
            <Image
              src={logoDark as StaticImageData}
              alt="Logo"
              className="mb-2 h-6 w-fit"
            />
          </div>

          <div className="border-b-lines-light flex h-full w-full items-center justify-between border-b-1">
            <div
              className={`font-heading pb-2 text-black ${isSidebarVisible ? "pl-8" : "pl-6"}`}
            >
              Platform Launch
            </div>
            <div className="flex items-center gap-6 pr-8 pb-2">
              <Button disabled>+ Add New Task</Button>
              <Image
                src={iconVerticalEllipsis as StaticImageData}
                alt="Vertical Ellipsis"
                className="h-5"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <aside
            className={`border-r-lines-light flex min-w-75 flex-col gap-14 border-r-1 bg-white pt-4 pb-12 transition-[margin] duration-500 ${
              isSidebarVisible ? "ml-0" : "ml-[-300px]"
            }`}
          >
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-5 pr-6">
                <div className="leading text-medium-grey pl-8 tracking-[2.4px] uppercase">
                  All Boards ({data.boards.length})
                </div>
                <div className="flex flex-col">
                  {data.boards.map((board) => (
                    <BoardListItem
                      board={board}
                      key={board.name}
                      isSelected={board.name === "Platform Launch"}
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
                    onClick={() => setIsSidebarVisible(false)}
                  >
                    <IconHideSidebar />
                    Hide Sidebar
                  </div>
                  <div
                    className={`bg-main-purple hover:bg-main-purple-hover relative left-31 flex h-full w-14 items-center justify-center rounded-r-full text-white hover:cursor-pointer ${isSidebarVisible ? "hidden" : "block"}`}
                    onClick={() => setIsSidebarVisible(true)}
                  >
                    <IconShowSidebar />
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              <p className="font-heading-large text-medium-grey">
                This board is empty. Create a new column to get started.
              </p>
              <Button>+ Add New Column</Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
