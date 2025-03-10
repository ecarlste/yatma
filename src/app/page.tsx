import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
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

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-lvh w-full">
        <aside className="border-r-lines-light flex min-h-lvh min-w-75 flex-col gap-14 border-r-1 bg-white pt-8 pb-12">
          <Image src={logoDark} alt="Logo" className="ml-8 h-6" />

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
              <div className="text-medium-grey font-heading-medium hover:bg-main-purple/10 hover:text-main-purple flex h-12 items-center gap-4 rounded-r-full pl-8 hover:cursor-pointer">
                <IconHideSidebar />
                Hide Sidebar
              </div>
            </div>
          </div>
        </aside>
        <div className="flex min-h-lvh w-full flex-col">
          <header className="border-b-lines-light flex h-24 w-full items-center justify-between border-b-1 bg-white pr-8 pb-2 pl-6">
            <div className="font-heading text-black">Platform Launch</div>
            <div className="flex items-center gap-6">
              <Button disabled>+ Add New Task</Button>
              <Image
                src={iconVerticalEllipsis}
                alt="Vertical Ellipsis"
                className="h-5"
              />
            </div>
          </header>
          <section className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              <p className="font-heading-large text-medium-grey">
                This board is empty. Create a new column to get started.
              </p>
              <Button>+ Add New Column</Button>
            </div>
          </section>
        </div>
      </main>
    </HydrateClient>
  );
}
