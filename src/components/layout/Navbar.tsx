import { Link } from "react-router-dom";
import myImg from "../../assets/leaf.png";
import { ModeToggle } from "../ui/mood-toogle";
const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex h-16 items-center gap-3 px-4">
      <div className="flex items-center">
        <img className="h-8 w-8" src={myImg} alt="" />{" "}
        <span className="font-bold ml-2">Task</span> <span>Master</span>
        <div className="flex space-x-3 ml-5">
          <Link to={"/"}>Task</Link>
          <Link to={"/user"}>User</Link>
        </div>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
