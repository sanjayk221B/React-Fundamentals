import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>{count}</h2>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button onClick={() =>{setCount(0)}}>Reset</button>
        <button
          className="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
