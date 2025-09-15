/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
export const Todo = () =>{
  const [inputValu, setInputValu] = useState(""); // "" error "" is empty string // you can not writh anty thing 
  // error*5 
  // then onChng
  const [task, setTask] = useState([]);

  const handleInputChang = (value) =>{
    setInputValu(value);
  };

  const handleFromSubmit = (event) =>{
    event.preventDefault();

    if(!inputValu) return; // not store valu

    if(task.includes(inputValu)) {
      setInputValu(""); // if add then empty
      return;
    } // chack data alrady prasen or not 
    setTask((prevTask) =>[...prevTask, inputValu]); // prevTask is give empty thst is next

    setInputValu("");
  };

  return(
    <section className=''>
      <header>
        <h1>Todo List</h1>
      </header>
      <section>
        <form onClick={handleFromSubmit}>
          <div>
            <input 
            type="text" 
            autoComplete='off' 
            value={inputValu}
            onChange={(event) => handleInputChang(event.target.value)} 
            />
          </div>
          <div>
            <button type='submit'>Add Task</button>
          </div>
        </form>
      </section>
      <section className=''>
        <ul>
          {task.map((curTask, index) =>{
            return(
              <li key={index}>
                <span>{curTask}</span>
                <button><AiOutlineDelete /></button>
                <button><FaCheck /></button>
                
              </li>
            )
          })}
        </ul>

      </section>
    </section>
  )
}


// note:

// in React evrithing is componet
// any data , which data is chang then this is call state

// error*5
// You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.