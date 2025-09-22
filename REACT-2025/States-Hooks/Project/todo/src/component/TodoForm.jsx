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
          <section className='mt-4'>
        <form onClick={handleFromSubmit} className='flex gap-2'>
          <div className='flex-1'>
            <input 
            type="text" 
            autoComplete='off' 
          //   value={inputValu}
            value={inputValu.content}
            onChange={(event) => handleInputChang(event.target.value)}
            className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter a task..." 
            />
          </div>
          <div>
            <button type='submit'
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
            >Add Task</button>
          </div>
        </form>
      </section>
     );
}