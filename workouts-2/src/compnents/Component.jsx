import { useContext } from "react";
import { MyContext } from "./UseContext";

const Component = () => {
  const { value, setValue } = useContext(MyContext);
  return (
    <div>
      {value}
      <button onClick={() => setValue("New Value")}>Change Value</button>
    </div>
  );
};

export default Component;
