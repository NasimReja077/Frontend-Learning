// The useEffect Hook is one of React's most important hooks that allows you to perform side effects in function components. Here's a detailed explanation
// Basic Syntax
/**
 * useEffect(() => {
    // Side effect code
    return () => {
        // Cleanup code (optional)
    }
}, [dependencies])

Key Points
First Argument: A function containing the side effect code
Second Argument: Dependencies array (optional)
     Empty array []: Runs only on mount
     No array: Runs on every render
     With dependencies [dep1, dep2]: Runs when dependencies change

// Example with Different Use Cases
import { useEffect, useState } from 'react';

function ExampleComponent() {
    const [data, setData] = useState(null);

    // Runs once on mount
    useEffect(() => {
        console.log('Component mounted');
    }, []);

    // Runs when data changes
    useEffect(() => {
        console.log('Data updated:', data);
    }, [data]);

    // Runs on every render
    useEffect(() => {
        console.log('Component rendered');
    });

    // With cleanup
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer tick');
        }, 1000);

        // Cleanup function
        return () => clearInterval(timer);
    }, []);

    return <div>Example Component</div>;
}

 */
import React, { useEffect, useState } from "react"

export const reactEffectHook = () => {
    // const [count, setCount] = useState(0);
    //  useEffect(() =>{ // useEffect run only one time 
    //       console.log("Hello UseEffect");
    //  },[count]); // depnadancy array

    const [data, setData] = useState(0);
    useEffect(() =>{
        setInterval(() => {
            const updateDate = new Date();
            setData(updateDate.toLocaleTimeString());
        },1000)
    },[]);

     return(
        //   <div>
        //        <h1>Helo, Ther useEffect</h1>
        //   </div>

        // <div>
        //     <h1>useEffect Hook</h1>
        //     <p>Count: {count}</p>
        //     <button onClick={() => setCount(count + 1)}>Increment</button>
        // </div>
        <div>
            <h1>Date: {data}</h1>
        </div>

     )
};