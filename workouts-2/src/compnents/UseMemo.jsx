import { useMemo, useState, useEffect } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  let a = 6;
  let b = 3;

  const Add = (a, b) => {
    return a + b;
  };

  const total = useMemo(() => Add(a, b), [a, b]);

  useEffect(() => {
    setSum(total);
  }, [total]);

  return (
    <div className="container" style={{ marginLeft: "50%" }}>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <h2>Count  : {count}</h2>
      <h2>Sum : {sum }</h2>
    </div>
  );
};

export default UseMemo;
