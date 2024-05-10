import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "INCREMENT10":
      return { count: state.count + 10 };

    case "DECREMENT":
              return { count: Math.max(state.count - 1, 0) };

    case "DECREMENT3":
      return { count: Math.max(state.count - 3, 0) };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "INCREMENT10" })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "DECREMENT3" })}>
        Decrement 3
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;



// case "DECREMENT":
//     // Check if the count is greater than 0 before decrementing
//     return { count: state.count > 0 ? state.count - 1 : 0 };

//   case "DECREMENT3":
//     // Check if the count is greater than 0 before decrementing
//     return { count: state.count > 0 ? state.count - 3 : 0 };