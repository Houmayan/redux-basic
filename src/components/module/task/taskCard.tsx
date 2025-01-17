import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleIsCompleted } from "@/redux/feature/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="a border px-5 py-3 rounded-md hover:border-green-500 hover:shadow-lg 	 transition duration-300">
      <div className="b flex justify-between items-center">
        <div className="c flex items-center gap-2">
          <div
            className={cn("d size-3 rounded-full", {
              "bg-green-500": task.priority === "high",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "low",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="e flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleIsCompleted(task.id))}
            className="f data-[state=checked]:bg-green-500"
          />
        </div>
      </div>
      <p
        className={cn("mt-5", {
          "blur-sm select-none": task.isCompleted,
        })}
      >
        Task Description: {task.description}
      </p>
    </div>
  );
}
