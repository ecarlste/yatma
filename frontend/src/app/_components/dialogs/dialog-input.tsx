import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

type DialogInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof UseFormRegisterReturn
> & {
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
};

function DialogInput({
  id,
  register,
  error,
  placeholder,
  ...props
}: DialogInputProps) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className={`border-medium-grey/25 font-body w-full rounded-sm border px-4 py-2 text-black focus:outline-none ${
        error ? "border-red" : "focus:border-main-purple"
      } placeholder:text-black/25`}
      {...register}
      {...props}
    />
  );
}

export default DialogInput;
