import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  task: ITask[];
}

const initialState = {
  task: [
    {
      id: "1111",
      title: "Initalizing Frontend",
      description: "Create Home page and routing",
      dueDate: "2025-11",
      priority: "High",
      isCompleted: false,
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  reducers: {},
  initialState,
});

export default taskSlice.reducer;
