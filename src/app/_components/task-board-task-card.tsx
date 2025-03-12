import { type Task } from "~/server/db/schema";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";

type TaskBoardTaskCardProps = {
  task: Task;
};

export default function TaskBoardTaskCard({ task }: TaskBoardTaskCardProps) {
  const { setViewedTask } = useTaskManagerStore((state) => state);

  const handleClick = () => {
    setViewedTask(task);
  };

  return (
    <article
      className="group flex flex-col gap-2 rounded-lg bg-white px-4 py-6 shadow-[0px_4px_6px_0px_rgba(54,78,126,0.10)] hover:cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="font-heading-medium group-hover:text-main-purple">
        {task.title}
      </h3>
      <div className="font-body-medium text-medium-grey">
        X of {task.subtasks.length} subtasks
      </div>
    </article>
  );
}
