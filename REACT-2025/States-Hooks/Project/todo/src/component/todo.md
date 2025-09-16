## ToDo 1st 

 
```import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
export const Todo = () =>{
  const [inputValu, setInputValu] = useState(""); // "" error "" is empty string // you can not writh anty thing 
  // error*5 
  // then onChng
  const [task, setTask] = useState([]);

  const [dateTime, setDateTime] = useState("");

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
    // consol.log("Nas") // every sec componet r rerander
  };

  // todo Date and Time
  useEffect(() =>{
    const interval = setInterval(() =>{
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval); // clenup funtion
  },[]);

  // todo data handleDelet delets funtion
  // const handleDelet = () =>{
  //   console.log(task);
  // }
  /**
   * (3) ['job', 'top', 'short']
   * 0: "job"
   * 1: "top"
   * 2: "short"
   * length: 3
   * [[Prototype]]: Array(0)
   */


   const handleDelet = (value) =>{ // is now parameter
    console.log(task);
    console.log(value);
    const updatdTask = task.filter((curTask) => curTask !== value); // return which eliment is not mach value
    // value ko chor ke baki sab ko ak new array me store kar daga , new array ko setTak ma add kar dea , then task update hua , then todo componet re render hua then ui update hua, 
    setTask(updatdTask)
  }

  // handleClearAllTodoData funtion
  const handleClearAllTodoData = () =>{
    setTask([]);
  }

  return(
    <section className=''>
      <header>
        <h1>Todo List</h1>
        {/* <h2>{formattedDate} - {formattedTime}</h2> */}
        <h2>{dateTime}</h2>
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
                <button><AiOutlineDelete onClick={() => handleDelet(curTask)}/></button>
                <button><FaCheck /></button>
                
              </li>
            )
          })}
        </ul>

      </section>
      <section className='' onClick={handleClearAllTodoData}>Clear All</section>
    </section>
  )
}
```


## note:

### // in React evrithing is componet
// any data , which data is chang then this is call state

### // error*5
### // You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

### // filter() method creates a new array with all elements that pass the test implemented by the provided function.
### // filter() method does not execute the function for empty elements.
### // filter() method does not change the original array.
### // filter() method returns an array