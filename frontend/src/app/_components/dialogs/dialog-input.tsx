type DialogInputProps = {
  id: string;
  defaultValue: string;
};

function DialogInput({ id, defaultValue }: DialogInputProps) {
  return (
    <input
      type="text"
      id={id}
      defaultValue={defaultValue}
      className="border-medium-grey/25 font-body w-full rounded-sm border px-4 py-2 text-black"
    />
  );
}

export default DialogInput;
