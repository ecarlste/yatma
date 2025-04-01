"use client";

type DialogProps = {
  children: React.ReactNode;
};

export default function Dialog({ children }: DialogProps) {
  return (
    <div
      className={`fixed inset-0 flex h-lvh w-full items-center justify-center bg-black/50`}
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
