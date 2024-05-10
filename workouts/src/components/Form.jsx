import React, { useState, useRef } from "react";

const Form = () => {
  const [input, createInput] = useState("");
  const inputRef = useRef("");

  const Focus = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };

  function changeInput(event) {
    createInput(event.target.value);
  }

  function logValue(event) {
    event.preventDefault();
    if (input.trim()) {
      console.log(input);
    } else {
      console.log("Enter a value");
    }
  }

  function logValueInputRef(event) {
    event.preventDefault();
    let value = inputRef.current.value;
    console.log(value);
  }

  return (
    <div className="form-container">
      <div className="focus">
        <input ref={inputRef} type="text" />
        <br />
        <button onClick={Focus}>Focus</button>
      </div>
      <div className="controlled">
        <form>
          <label>Controlled Log</label>
          <br />
          <input type="text" value={input} onChange={changeInput} />
          <button onClick={logValue}>Submit</button>
        </form>
      </div>
      <br />
      <div className="uncontrolled">
        <form>
          <label>uncontrolled Log</label>
          <br />
          <input type="text" defaultValue={"sanjay"} ref={inputRef} />
          <button onClick={logValueInputRef}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
