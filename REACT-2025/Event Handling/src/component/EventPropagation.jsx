 
import "./ev.css";

export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
     console.log(event);
    console.log("Child clicked");
   event.stopPropagation(); // uncomment kar ke propagation rok sakta hai // Bubbling
  };

  return (
     // Bubbling
//     <div className="container">
//       <div className="grandparent" onClick={handleGrandParent}>
//         <div className="parent" onClick={handleParentClick}>
//           <button className="child" onClick={handleChildClick}>
//             Child Div
//           </button>
//         </div>
//       </div>
//     </div>


// Capturing
     <div className="container">
      <div className="grandparent" onClickCapture={handleGrandParent}>
        <div className="parent" onClickCapture={handleParentClick}>
          <button className="child" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </div>
  );
};
