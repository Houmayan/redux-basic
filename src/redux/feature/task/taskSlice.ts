import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  task: [
    {
      id: "1111",
      title: "Initalizing Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      priority: "high",
      isCompleted: false,
    },
    // {
    //   id: "1113",
    //   title: "Initalizing github",
    //   description: "Create Home page and routing",
    //   dueDate: "2025-11",
    //   priority: "Low",
    //   isCompleted: false,
    // },
    // {
    //   id: "1114",
    //   title: "Initalizing backend",
    //   description: "Create Home page and routing",
    //   dueDate: "2025-11",
    //   priority: "Medium",
    //   isCompleted: false,
    // },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  // console.log("looking", { isCompleted: false, ...taskData });
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();
      // const allTask = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      const taskData = createTask(action.payload);
      console.log(taskData);
      state.task.push(taskData);
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTask = (state: RootState) => state.todo.task;
export default taskSlice.reducer;
