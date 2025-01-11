import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const taskCard = ({ task }: IProps) => {
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
          <h1>{task.title}</h1>
        </div>
        <div className="e flex gap-3 items-center">
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox className="f data-[state=checked]:bg-green-500" />
        </div>
      </div>
      <p className="mt-5 g">Task Description: {task.description}</p>
    </div>
  );
};

export default taskCard;
