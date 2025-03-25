import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import TaskBoard from "./_components/task-board";

export default function Home() {
  const isSidebarOpen = true;

  return (
    <main className="relative flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <Header isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <TaskBoard />
        </div>
      </div>
    </main>
  );
}
