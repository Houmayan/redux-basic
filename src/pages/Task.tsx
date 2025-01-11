import AddTaskModal from "@/components/module/task/addTaskModal";
import TaskCard from "@/components/module/task/taskCard";
import { selectTask } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
const Task = () => {
  const tasks = useAppSelector(selectTask);

  console.log(tasks);
  return (
    <div className="max-w-7xl px-5 mt-20 mx-auto ">
      <div className="flex justify-between items-center">
        <h1>Task:</h1>
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
