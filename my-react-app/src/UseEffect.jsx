import React, { useState, useEffect } from 'react';

function UseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listerner added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removedk")
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width : {width}px</p>
        <p>Window Height : {height}px</p>
    </>)
}

export default UseEffect




//Count and color example using useEffect
// const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     useEffect(() => {
//         document.title = `Count:${count}`;
//     })

//     function addCount() {
//         setCount(c => c + 1)
//     }
//     function subtractCount() {
//         setCount(c => c - 1)
//     }
//     function changeColor() {
//         setColor(c => c === "green" ? "red" : "green")
//     }

//     return (<>
//         <p style={{ color: color }}>count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={subtractCount}>Subtract</button>
//         <button onClick={changeColor}>Change Color</button>
//     </>)