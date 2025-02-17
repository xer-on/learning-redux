import { Button } from "@/components/ui/button";
import {
  decrement,
  increment,
  reset,
} from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Counter() {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-8"
      role="main"
    >
      <h1 className="text-3xl font-bold">Counter App</h1>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-6xl font-bold" aria-live="polite">
          {count}
        </h2>
        <p className="">Current count value</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => handleIncrement(1)} aria-label="Increment by 1">
          Increment
        </Button>
        <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
        <Button onClick={() => handleDecrement(1)} aria-label="Decrement by 1">
          Decrement
        </Button>
        <Button onClick={() => handleDecrement(5)}>Decrement by 5</Button>
      </div>
      <Button
        className="bg-gray-500 hover:bg-gray-600 "
        onClick={handleReset}
        aria-label="Reset counter"
      >
        Reset
      </Button>
    </div>
  );
}
