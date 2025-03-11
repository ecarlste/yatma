"use client";

import Button from "./_components/button";
import data from "~/server/db/data.json";
import { useState } from "react";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

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
