import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("World");
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
