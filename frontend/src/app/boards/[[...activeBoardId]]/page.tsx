import Header from "~/app/_components/header";
import Sidebar from "~/app/_components/sidebar";
import TaskBoard from "~/app/_components/task-board";
import { getBoards } from "~/server/db/boards-dal";

type ActiveBoardPageProps = {
  params: {
    activeBoardId?: string[];
  };
};

export default async function ActiveBoardPage({
  params,
}: ActiveBoardPageProps) {
  const activeBoardId = params.activeBoardId?.[0] ?? null;
  const boards = await getBoards();

  const isSidebarOpen = true;

  return (
    <main className="relative flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <Header isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            boards={boards}
            activeBoardId={activeBoardId}
          />
          <TaskBoard />
        </div>
      </div>
    </main>
  );
}
