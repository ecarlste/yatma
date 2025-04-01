"use client";

import { type Board, type BoardColumn } from "~/lib/types";
import Dialog from "./dialog";
import DialogHeading from "./dialog-heading";
import DialogInput from "./dialog-input";
import DialogContent from "./dialog-content";
import DialogTitle from "./dialog-title";
import DialogSection from "./dialog-section";
import Button from "../button";
import { useRouter } from "next/navigation";
import DialogColumnInputList from "./dialog-input-list";

type BoardEditDialogProps = {
  board: Board;
  columns: BoardColumn[];
};

function BoardEditDialog({ board, columns }: BoardEditDialogProps) {
  const router = useRouter();
  const closeDialogHref = `/boards/${board.id}`;

  function handleClose(): void {
    router.push(closeDialogHref);
  }

  return (
    <Dialog onClose={handleClose}>
      <DialogContent>
        <DialogTitle>Edit Board</DialogTitle>
        <DialogSection>
          <DialogHeading>Board Name</DialogHeading>
          <DialogInput id="board-name" defaultValue={board.name} />
        </DialogSection>
        <DialogSection>
          <DialogHeading>Columns</DialogHeading>
          <DialogColumnInputList items={columns} boardId={board.id} />
        </DialogSection>
        <Button className="w-full">Save Changes</Button>
      </DialogContent>
    </Dialog>
  );
}

export default BoardEditDialog;
