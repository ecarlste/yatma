const buttonVariants = {
  primary:
    "bg-main-purple text-white hover:bg-main-purple-hover disabled:hover:bg-main-purple",
  secondary:
    "bg-secondary-purple text-main-purple hover:bg-secondary-purple-hover disabled:hover:bg-secondary-purple",
  destructive: "bg-red text-white hover:bg-red-hover disabled:hover:bg-red",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: Readonly<
  {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "destructive";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
  return (
    <button
      className={`font-heading-medium rounded-full px-6 py-3.5 ${buttonVariants[variant]} w-fit hover:cursor-pointer disabled:opacity-25 disabled:hover:cursor-default`}
      {...props}
    >
      {children}
    </button>
  );
}
