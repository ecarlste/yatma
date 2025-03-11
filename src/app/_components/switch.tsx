"use client";

import { useState } from "react";

export default function Switch() {
  const [state, setState] = useState(false);

  return (
    <div
      className={`bg-main-purple flex h-5 w-10 rounded-full p-[3px] hover:cursor-pointer`}
      onClick={() => {
        setState(!state);
      }}
    >
      <div
        className={`h-[14px] w-[14px] rounded-full bg-white transition-transform duration-500 ease-in-out ${state ? "translate-x-[20px]" : "translate-x-0"}`}
      />
    </div>
  );
}
