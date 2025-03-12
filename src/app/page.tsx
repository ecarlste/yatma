"use client";

import { useState } from "react";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import TaskBoard from "./_components/task-board";
import ViewTaskDialog from "./_components/view-task-dialog";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="relative flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <Header isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <TaskBoard />
        </div>
      </div>

      <ViewTaskDialog />
    </main>
  );
}
