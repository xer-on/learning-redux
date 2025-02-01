import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Counter() {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <h2 className="text-6xl font-bold">{count}</h2>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
          onClick={() => handleIncrement(1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
          onClick={() => handleIncrement(5)}
        >
          Increment by 5
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
