import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import { passwordManagerIgnoreAttributes } from "~/lib/form-utils";

type DialogInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  keyof UseFormRegisterReturn
> & {
  id: string;
  register?: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
  ignorePasswordManagers?: boolean;
};

function DialogInput({
  id,
  register,
  error,
  placeholder,
  ignorePasswordManagers = true,
  ...props
}: DialogInputProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        {...(ignorePasswordManagers ? passwordManagerIgnoreAttributes : {})}
        className={`border-medium-grey/25 font-body w-full rounded-sm border px-4 py-2 text-black focus:outline-none ${
          error ? "border-red" : "focus:border-main-purple"
        } placeholder:text-black/25`}
        {...register}
        {...props}
      />
      {error && (
        <span className="text-red pointer-events-none absolute inset-y-0 right-4 flex items-center">
          {error}
        </span>
      )}
    </div>
  );
}

export default DialogInput;
