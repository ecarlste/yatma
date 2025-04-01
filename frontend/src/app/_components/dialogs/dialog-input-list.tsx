import { type BoardColumn } from "~/lib/types";
import Button from "../button";
import DialogInput from "./dialog-input";
import IconCross from "./icon-cross";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type DialogInputListProps = {
  items: BoardColumn[];
  boardId: string;
};

function DialogColumnInputList({ items, boardId }: DialogInputListProps) {
  const [currentItems, setCurrentItems] = useState<BoardColumn[]>(items);

  function handleAddNewColumn() {
    const maxSortIndex = Math.max(
      ...currentItems.map((item) => item.sortIndex),
    );
    const newColumn: BoardColumn = {
      id: uuidv4(),
      name: "",
      boardId,
      sortIndex: maxSortIndex + 1,
      createdAt: "",
      updatedAt: null,
    };

    console.log("newColumn", newColumn);

    setCurrentItems((prevItems) => [...prevItems, newColumn]);
  }

  function handleRemoveColumn(id: string) {
    setCurrentItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="flex flex-col gap-3">
      {currentItems.map((item) => (
        <div className="flex items-center gap-4" key={item.id}>
          <DialogInput id={item.id} defaultValue={item.name} />
          <IconCross
            className="shrink-0"
            onClick={() => handleRemoveColumn(item.id)}
          />
        </div>
      ))}
      <Button
        variant="secondary"
        size="small"
        className="w-full"
        onClick={handleAddNewColumn}
      >
        + Add New Column
      </Button>
    </div>
  );
}

export default DialogColumnInputList;
