import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

type DialogInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof UseFormRegisterReturn
> & {
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
};

function DialogInput({ id, register, error, ...props }: DialogInputProps) {
  return (
    <input
      type="text"
      id={id}
      className={`border-medium-grey/25 font-body w-full rounded-sm border px-4 py-2 text-black focus:outline-none ${
        error ? "border-red" : "focus:border-main-purple"
      }`}
      {...register}
      {...props}
    />
  );
}

export default DialogInput;
