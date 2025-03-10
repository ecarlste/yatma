"use client";

import { useState } from "react";

export default function Switch() {
  const [state, setState] = useState(false);

  const justify = state ? "justify-end" : "justify-start";

  return (
    <div
      className={`bg-main-purple flex h-5 w-10 rounded-full p-[3px] hover:cursor-pointer ${justify}`}
      onClick={() => {
        setState(!state);
      }}
    >
      <div className="h-[14px] w-[14px] rounded-full bg-white" />
    </div>
  );
}
