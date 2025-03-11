"use client";

import data from "~/server/db/data.json";
import { useState } from "react";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import TaskBoard from "./_components/task-board";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <Header isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            boards={data.boards}
          />

          <TaskBoard />
        </div>
      </div>
    </main>
  );
}
