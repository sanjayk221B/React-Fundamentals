import { useMemo, useState } from "react";

const ListComponent = ({ items }) => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const processItems = (items) => {
    setCount(count + 1);
    console.log(`processedItems called ${count}`);
    return items.map((item) => ({
      id: item.id,
      name: item.name.toUpperCase(),
    }));
  };

  const processedItems = useMemo(() => processItems(items), [items]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>

      <ul>
        {processedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ListComponent;
