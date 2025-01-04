import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.counter.count);
  // const handleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };
  // const handleDicrement = () => {
  //   dispatch(decrement());
  // };
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
