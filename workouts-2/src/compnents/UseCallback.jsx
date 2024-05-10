import React, { useState, useCallback } from 'react';

function ParentComponent() {
 const [count, setCount] = useState(0);

 console.log('ParentComponent render', count); // Logs every time ParentComponent renders

 const incrementCount = useCallback(() => {
    console.log('Incrementing count'); // Logs when incrementCount is called
    setCount(count + 1);
 }, [count]); // Dependency array

 return (
    <div>
      <button onClick={incrementCount}>Increment count</button>
      <ChildComponent count={count} />
    </div>
 );
}

function ChildComponent({ count }) {
 console.log('ChildComponent render', count); // Logs every time ChildComponent renders
 return <div>Count: {count}</div>;
}


export default ParentComponent;
