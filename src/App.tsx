import "./App.css";
import { Button } from "./components/ui/button";
import { decrement, increment } from "./redux/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.count);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDicrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter with Redux</h1>
      <Button onClick={() => handleIncrement(5)}>Increment</Button>
      <div>{counter}</div>
      <Button onClick={handleDicrement}>Decrement</Button>
    </div>
  );
}

export default App;
