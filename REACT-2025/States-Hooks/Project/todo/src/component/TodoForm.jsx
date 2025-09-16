import React, { useState } from 'react';
export const TodoForm =({onAddTodo}) =>{ // {} is use for object destructuring // prop drilling // prop. onAddTodo
     // const [inputValu, setInputValu] = useState("");
     const [inputValu, setInputValu] = useState({});
     const handleInputChang = (value) =>{
          // setInputValu(value);
          setInputValu({id: value, content: value, checked: false}); 
     };
     const handleFromSubmit = (event) => { // when click child then parent funtion call 
          event.preventDefault();
          onAddTodo(inputValu);
          // setInputValu(""); // delete as a element
          setInputValu({id: "", content: "", checked:false}); // delete as a object
     }

     // child component
     return(
          <section>
        <form onClick={handleFromSubmit}>
          <div>
            <input 
            type="text" 
            autoComplete='off' 
          //   value={inputValu}
            value={inputValu.content}
            onChange={(event) => handleInputChang(event.target.value)} 
            />
          </div>
          <div>
            <button type='submit'>Add Task</button>
          </div>
        </form>
      </section>
     );
}