"use client";

import { useEffect } from "react";

type DialogProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Dialog({ children, onClose }: DialogProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex h-lvh w-full items-center justify-center bg-black/50`}
      onClick={onClose}
    >
      <div
        className="w-120 rounded-md bg-white p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
