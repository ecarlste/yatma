import Dialog from "./dialog";
import { useTaskManagerStore } from "../_providers/task-manager-store-provider";

export default function ViewTaskDialog() {
  const { viewedTask, setViewedTask } = useTaskManagerStore((state) => state);

  if (!viewedTask) {
    return null;
  }

  return (
    <Dialog onClose={() => setViewedTask(null)}>
      <div className="flex flex-col">
        <div className="flex gap-6">
          <h4 className="font-heading-large text-black">{viewedTask.title}</h4>
        </div>
      </div>
    </Dialog>
  );
}
