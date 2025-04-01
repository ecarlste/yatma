type DialogSectionProps = {
  children: React.ReactNode;
};

function DialogSection({ children }: DialogSectionProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export default DialogSection;
