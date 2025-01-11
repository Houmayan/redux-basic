import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./providers/theme-provider";

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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </ThemeProvider>
  );
}

export default App;
