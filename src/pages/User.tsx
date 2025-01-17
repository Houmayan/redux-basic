import AddUser from "@/components/module/user/addUser";
import UserModal from "@/components/module/user/userModal";
import { selectUser } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(selectUser);
  return (
    <div className="max-w-7xl mx-auto mt-20 ">
      <div className="flex justify-between">
        <h1>User:</h1>
        <UserModal></UserModal>
      </div>
      <div className="max-w-2xl mx-auto grid grid-cols-3 gap-2 text-center">
        {users.map((user) => (
          <AddUser key={user.id} user={user}></AddUser>
        ))}
      </div>
    </div>
  );
};

export default User;
