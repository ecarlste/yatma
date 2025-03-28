"use client";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";
import IconHideSidebar from "./icon-hide-sidebar";
import IconShowSidebar from "./icon-show-sidebar";

export function SideBarVisibilityToggle() {
  const { isSidebarOpen, setIsSidebarOpen } = useTaskManagerStore(
    (state) => state,
  );

  return (
    <div className="flex w-full">
      <div
        className="text-medium-grey font-heading-medium hover:bg-main-purple/10 hover:text-main-purple mr-[-100px] flex h-12 w-full items-center gap-4 rounded-r-full pl-8 hover:cursor-pointer"
        onClick={() => setIsSidebarOpen(false)}
      >
        <IconHideSidebar />
        Hide Sidebar
      </div>
      <div
        className={`bg-main-purple hover:bg-main-purple-hover relative left-31 flex h-full w-14 items-center justify-center rounded-r-full text-white hover:cursor-pointer ${isSidebarOpen ? "hidden" : "block"}`}
        onClick={() => setIsSidebarOpen(true)}
      >
        <IconShowSidebar />
      </div>
    </div>
  );
}
