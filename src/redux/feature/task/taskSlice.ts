import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "./../../../types";

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
    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      // console.log();
      state.task.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      state.task.forEach((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    },
    filterTask: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleIsCompleted, deleteTask, filterTask } =
  taskSlice.actions;

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.task.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.task.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.task.filter((task) => task.priority === "high");
  } else {
    return state.todo.task;
  }
};
export default taskSlice.reducer;
