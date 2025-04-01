import Link from "next/link";

type TaskBoardNewColumnButtonProps = {
  href: string;
};

function TaskBoardNewColumnButton({ href }: TaskBoardNewColumnButtonProps) {
  return (
    <Link
      href={href}
      className="font-heading text-medium-grey hover:text-main-purple mt-[39px] mb-12 flex w-70 shrink-0 items-center justify-center rounded-md bg-gradient-to-b from-[#E9EFFA] to-[rgba(233,239,250,0.5)]"
    >
      + New Column
    </Link>
  );
}

export default TaskBoardNewColumnButton;
