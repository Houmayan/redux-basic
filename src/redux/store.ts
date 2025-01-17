import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../redux/feature/task/taskSlice";
import counterReducer from "./feature/counter/counterSlice";
import userReducer from "./feature/user/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
