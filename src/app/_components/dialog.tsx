type DialogProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Dialog({ children, onClose }: DialogProps) {
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
