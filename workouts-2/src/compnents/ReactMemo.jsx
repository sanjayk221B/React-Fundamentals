import React, { useState } from "react";

const Message = ({ text }) => {
  console.log("message component rendered");
  return <div>{text}</div>;
};

const MemoizedMessage = React.memo(Message);

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedMessage text="Hell0" />
      {/* <Message text="Hello"/> */}
    </div>
  );
};

export default ReactMemo;
