import ListComponent from "./ListComponent";

const MyComponent = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
  ];

  return (
    <div>
      <ListComponent items={items} />
    </div>
  );
};

export default MyComponent;
