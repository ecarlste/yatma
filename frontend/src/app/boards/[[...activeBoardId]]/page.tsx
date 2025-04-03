import { z } from "zod";
import BoardFormDialog from "~/app/_components/dialogs/board-form-dialog";
import TaskFormDialog from "~/app/_components/dialogs/task-form-dialog";
import Header from "~/app/_components/header";
import Sidebar from "~/app/_components/sidebar";
import TaskBoard from "~/app/_components/task-board";
import { getBoards, getColumnsByBoardId } from "~/server/db/boards-dal";

type ActiveBoardPageProps = {
  params: Promise<{
    activeBoardId?: string[];
  }>;
};

export default async function ActiveBoardPage(props: ActiveBoardPageProps) {
  const params = await props.params;
  const activeBoardId =
    params.activeBoardId?.[0] &&
    z.string().uuid().safeParse(params.activeBoardId[0]).success
      ? params.activeBoardId[0]
      : undefined;
  const boards = await getBoards();
  const activeBoard = boards.find((board) => board.id === activeBoardId);

  const activeBoardColumns = activeBoard
    ? await getColumnsByBoardId(activeBoard.id)
    : undefined;

  const isBoardEmpty = activeBoardColumns && activeBoardColumns.length === 0;

  const isEditBoardDialogOpen = activeBoardId
    ? params.activeBoardId?.[1] === "edit"
    : false;
  const isAddBoardDialogOpen =
    (!activeBoard && params.activeBoardId?.[0] === "add") ||
    params.activeBoardId?.[1] === "add";
  const closeBoardFormDialogHref = activeBoardId
    ? `/boards/${activeBoardId}`
    : "/boards";

  const activeTaskId =
    params.activeBoardId?.[1] &&
    params.activeBoardId?.[1] === "tasks" &&
    params.activeBoardId?.[2] &&
    z.string().uuid().safeParse(params.activeBoardId?.[2]).success
      ? params.activeBoardId[2]
      : undefined;
  const isAddTaskFormDialogOpen =
    params.activeBoardId?.[1] === "tasks" &&
    !activeTaskId &&
    params.activeBoardId?.[2] === "add";
  const closeTaskFormDialogHref = `/boards/${activeBoardId}`;

  console.log("activeTaskId:", activeTaskId);
  console.log(params.activeBoardId);
  console.log("isAddTaskFormDialogOpen:", isAddTaskFormDialogOpen);

  return (
    <main className="relative flex min-h-lvh w-full">
      <div className="flex min-h-lvh w-full flex-col">
        <Header board={activeBoard} isBoardEmpty={isBoardEmpty} />
        <div className="flex flex-1">
          <Sidebar boards={boards} activeBoardId={activeBoardId} />
          <TaskBoard
            columns={activeBoardColumns ?? []}
            activeBoardId={activeBoardId}
          />
        </div>
      </div>
      {(isEditBoardDialogOpen || isAddBoardDialogOpen) && (
        <BoardFormDialog
          board={isEditBoardDialogOpen ? activeBoard : undefined}
          columns={isEditBoardDialogOpen ? activeBoardColumns : undefined}
          closeDialogHref={closeBoardFormDialogHref}
        />
      )}
      {isAddTaskFormDialogOpen && (
        <TaskFormDialog
          columns={activeBoardColumns}
          closeDialogHref={closeTaskFormDialogHref}
        />
      )}
    </main>
  );
}
