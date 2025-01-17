import AddTaskModal from "@/components/module/task/addTaskModal";
import TaskCard from "@/components/module/task/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterTask, selectTask } from "@/redux/feature/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
const Task = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();

  console.log(tasks);
  return (
    <div className="max-w-7xl px-5 mt-20 mx-auto ">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto">Task:</h1>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className=" grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(filterTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* <addTaskModal></addTaskModal> */}
        <AddTaskModal></AddTaskModal>
      </div>

      <div className="space-y-5 mt-5 ">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
        {/* {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))} */}
      </div>
    </div>
  );
};

export default Task;
