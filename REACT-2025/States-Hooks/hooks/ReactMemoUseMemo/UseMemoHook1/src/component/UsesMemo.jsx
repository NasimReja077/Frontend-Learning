import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  // Expensive calculation function
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    // Note: The original loop was `i = i + 1` inside `for (i = 0; i <= 1000000000; i++)`, 
    // which caused the inner `i++` to be redundant/incorrect, but since the goal is to 
    // demonstrate memoization, we'll keep the function structure for the expensive calculation.
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  // Use useMemo inside the function component to memoize the result of the expensive sum() call.
  const total = useMemo(() => sum(), []); // Now called inside the component!

  return <p>sum: {total}</p>;
};


const MemoParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      {/* Every time the button is clicked, MemoParentComponent re-renders, 
        which also re-renders ExpensiveComponent. 
        Thanks to useMemo, the 'sum' calculation inside ExpensiveComponent 
        will only run on the *first* render, not on subsequent re-renders 
        since its dependency array is empty ([]).
      */}
      <ExpensiveComponent /> 
      <button
        onClick={() => setCount(count + 1)}
        className="py-3 px-6 bg-cyan-400 rounded-sm"
      >
        Re-render Parent
      </button>
      <p>Parent re-renders: {count}</p>
    </div>
  );
};

export default MemoParentComponent;