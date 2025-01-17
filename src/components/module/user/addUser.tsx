import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/feature/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

// import React from 'react';
interface IProps {
  user: IUser;
}
const AddUser = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  console.log(user);
  return (
    <div className=" border p-3 rounded-sm my-3 hover:border-red-500 hover:ease-out hover:duration-300 flex justify-between items-center">
      <h1>{user.name}</h1>
      <Button
        // onClick={//() => dispatch(deleteTask(task.id))}
        onClick={() => dispatch(removeUser(user.id))}
        variant="link"
        className="p-0 text-red-500"
      >
        <Trash2 />
      </Button>
    </div>
  );
};

export default AddUser;
