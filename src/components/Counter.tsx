import { useState } from "react";
import SetButton from "./SetButton";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount((count) => count + 1);
  };
  const handleDecrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
      <SetButton value={5} setValue={setCount} />
    </div>
  );
};

export default Counter;
