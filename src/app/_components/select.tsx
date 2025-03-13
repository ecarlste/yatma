import { useState } from "react";
import IconChevronDown from "./icon-chevron-down";
import { type BoardColumn } from "~/server/db/schema";

type SelectProps = {
  options: BoardColumn[];
  selected: string;
  onChange: (option: BoardColumn) => void;
};

export default function Select({ options, selected, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Select Box */}
      <div
        className={`font-body flex h-10 w-full cursor-pointer items-center justify-between rounded-sm border px-4 text-black ${isOpen ? "border-main-purple" : "border-[rgba(130, 143, 163, 0.25)]"}`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <span>{selected || "Select an option"}</span>
        <IconChevronDown className="text-main-purple transition-transform duration-200" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="border-main-purple text-medium-grey absolute left-0 mt-2.5 w-full rounded-lg border bg-white py-3 shadow-lg">
          {options.map((option) => (
            <li
              key={option.id}
              className="hover:bg-main-purple/25 cursor-pointer px-4 py-1 transition"
              onMouseDown={(e) => e.preventDefault()} // Prevents dropdown from closing before click registers
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
