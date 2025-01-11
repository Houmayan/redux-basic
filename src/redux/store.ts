import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/feature/task/taskSlice";
import counterReducer from "./feature/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
