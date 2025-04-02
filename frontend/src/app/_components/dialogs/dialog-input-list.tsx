import Button from "../button";
import DialogInput from "./dialog-input";
import IconCross from "./icon-cross";
import { v4 as uuidv4 } from "uuid";
import { type Control, useFieldArray } from "react-hook-form";
import { BoardFormInput } from "~/lib/board-form-schema";

type DialogInputListProps = {
  control: Control<BoardFormInput>;
};

function DialogColumnInputList({ control }: DialogInputListProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  function handleAddNewColumn() {
    append({
      id: uuidv4(),
      name: "",
    });
  }

  return (
    <div className="flex flex-col gap-3">
      {fields.map((field, index) => (
        <div className="flex items-center gap-4" key={field.id}>
          <DialogInput
            id={`columns.${index}.name`}
            register={control.register(`columns.${index}.name`)}
            error={
              control.getFieldState(`columns.${index}.name`).error?.message
            }
          />
          <IconCross className="shrink-0" onClick={() => remove(index)} />
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
