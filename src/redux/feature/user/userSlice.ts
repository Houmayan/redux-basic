import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import IUser from "../../../types";

interface initialState {
  user: IUser[];
}

const initialState: initialState = {
  user: [
    {
      id: "1",
      name: "John Doe",
    },
  ],
};
type DraftUser = Pick<IUser, "name">;
const createUser = (userDate: DraftUser): IUser => {
  return { id: nanoid(), ...userDate };
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const newUser = createUser(action.payload);
      state.user.push(newUser);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      // const userId = action.payload;
      state.user = state.user.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
