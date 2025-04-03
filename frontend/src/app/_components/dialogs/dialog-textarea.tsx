type DialogTextareaProps = {
  id: string;
  placeholder?: string;
};

function DialogTextarea({ id, placeholder }: DialogTextareaProps) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className={
        "border-medium-grey/25 font-body focus:border-main-purple h-28 w-full resize-none rounded-sm border px-4 py-2 text-black placeholder:text-black/25 focus:outline-none"
      }
    />
  );
}

export default DialogTextarea;
