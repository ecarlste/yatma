type DialogContentProps = {
  children: React.ReactNode;
};

function DialogContent({ children }: DialogContentProps) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export default DialogContent;
