import { type Board, type BoardColumn } from "~/lib/types";
import Dialog from "./dialog";
import DialogHeading from "./dialog-heading";
import DialogInput from "./dialog-input";
import DialogContent from "./dialog-content";
import DialogTitle from "./dialog-title";
import DialogSection from "./dialog-section";
import Button from "../button";
import IconCross from "./icon-cross";

type BoardEditDialogProps = {
  board: Board;
  columns: BoardColumn[];
};

function BoardEditDialog({ board, columns }: BoardEditDialogProps) {
  //   const closeDialogHref = `/boards/${board.id}`;

  return (
    <Dialog>
      <DialogContent>
        <DialogTitle>Edit Board</DialogTitle>
        <DialogSection>
          <DialogHeading>Board Name</DialogHeading>
          <DialogInput id="board-name" defaultValue={board.name} />
        </DialogSection>
        <DialogSection>
          <DialogHeading>Columns</DialogHeading>
          <div className="flex flex-col gap-3">
            {columns.map((column) => (
              <div className="flex items-center gap-4" key={column.id}>
                <DialogInput id={column.id} defaultValue={column.name} />
                <IconCross className="shrink-0" />
              </div>
            ))}
            <Button variant="secondary" size="small" className="w-full">
              + Add New Column
            </Button>
          </div>
        </DialogSection>
        <Button className="w-full">Save Changes</Button>
      </DialogContent>
    </Dialog>
  );
}

export default BoardEditDialog;
