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
import { useForm } from "react-hook-form";
import { type BoardFormInput, boardFormSchema } from "~/lib/board-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

type BoardFormDialogProps = {
  board: Board;
  columns: BoardColumn[];
};

function BoardFormDialog({ board, columns }: BoardFormDialogProps) {
  const router = useRouter();
  const closeDialogHref = `/boards/${board.id}`;

  function handleClose(): void {
    router.push(closeDialogHref);
  }

  const onSubmit = async (data: BoardFormInput) => {
    try {
      console.log("Submitting data:", data);
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BoardFormInput>({
    resolver: zodResolver(boardFormSchema),
    defaultValues: {
      name: board.name,
      columns: columns.map((column) => ({
        id: column.id,
        name: column.name,
      })),
    },
  });

  return (
    <Dialog onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogTitle>Edit Board</DialogTitle>
          <DialogSection>
            <DialogHeading>Board Name</DialogHeading>
            <DialogInput
              id="name"
              register={register("name", {
                setValueAs: (value: string) => value.trim(),
              })}
              error={errors.name?.message}
            />
          </DialogSection>
          <DialogSection>
            <DialogHeading>Columns</DialogHeading>
            <DialogColumnInputList control={control} />
          </DialogSection>
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default BoardFormDialog;
