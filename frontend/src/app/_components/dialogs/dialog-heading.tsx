type DialogHeadingProps = {
  children: React.ReactNode;
};

function DialogHeading({ children }: DialogHeadingProps) {
  return <span className="font-body-medium text-medium-grey">{children}</span>;
}

export default DialogHeading;
