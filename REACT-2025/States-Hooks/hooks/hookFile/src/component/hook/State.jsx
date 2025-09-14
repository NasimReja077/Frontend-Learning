import { useState } from "react";
export const State = () => { // parent compont 
     // js
     //   let value = 0;
     //   const handleButtonClick = () => {
     //     value++;
     //     console.log(value);
     //   };
     //   let array = useState();
     //   console.log(array);


     //   let array = useState();
     //   console.log(array);
     const [count, setCount] = useState(0);
     console.log("Parent Component rendered");
     const handleButtonClick = () =>{
          // count++ not do that
          setCount(() => count+1);
     };
     return (
     <>
     <div className="main-div">
          <h1>{count}</h1>
          <button onClick={handleButtonClick}>Increment</button>
      </div>
      <ChildComponent count={count} /> {/**if parent componet rerender then child componer also rerender but ony child componet chabg then parent componet not effact */}
     </>
     );
};


function ChildComponent({ count }) {
  console.log("Child Component rendered");
  return (
    <div className="main-div">
      <h2> Child Component - {count} </h2>
    </div>
  );
}



/**
     Parent Component rendered
     Parent Component rendered
     Child Component rendered
     Child Component rendered
 */
//why get 2 time 
// becose <React.StrictMode> // bydefole react provite this for dovlompment face 
// duble chack // not get error


/**
 *Why the state value does not reset to its initial value on re-render?
First Render: const [count, setCount] = useState(0);
count is initialized to 0.

Button Click: increment function is called.
setCount(count + 1) updates count to 1.

Re-render: React re-renders the component. (when user click button for the 2nd time)
const [count, setCount] = useState(0); sees that count is now 1 and uses 1 as the current state. The useState hook is smart enough to only use the initial value the very first time the component renders.
 */