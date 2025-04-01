const buttonVariants = {
  primary:
    "bg-main-purple text-white hover:bg-main-purple-hover disabled:hover:bg-main-purple",
  secondary:
    "bg-secondary-purple text-main-purple hover:bg-secondary-purple-hover disabled:hover:bg-secondary-purple",
  destructive: "bg-red text-white hover:bg-red-hover disabled:hover:bg-red",
};

const buttonSizes = {
  small: "font-button-small h-10",
  large: "font-heading-medium h-12",
};

export default function Button({
  children,
  variant = "primary",
  size = "large",
  className,
  ...props
}: Readonly<
  {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "destructive";
    size?: "small" | "large";
    className?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
  return (
    <button
      className={`${buttonSizes[size]} rounded-full px-6 ${buttonVariants[variant]} w-fit hover:cursor-pointer disabled:opacity-25 disabled:hover:cursor-default ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
