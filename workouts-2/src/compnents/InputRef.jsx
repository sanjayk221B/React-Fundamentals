import React, { useRef } from "react";

const ExampleComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element on button click
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default ExampleComponent;
