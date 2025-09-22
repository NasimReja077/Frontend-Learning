import React from 'react'
import { useState } from 'react'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDatetime } from './TodoDateTime';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';
// reusable component


export const Todo = () =>{
  // const [task, setTask] = useState([]);
   const [task, setTask] = useState(() => getLocalStorageTodoData());


  // todo handleFromSubmit funtion
  const handleFromSubmit = (inputValu) =>{
    const {id, content, checked} = inputValu; // inputValu is object

    // if(!inputValu) return; // not store valu
    if(!content) return; // to check if the input field is empty or not

    // to check if the the data is already exist or not 
    // if(task.includes(inputValu)) return;  // includes

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if(ifTodoContentMatched) return; // if matched then return
    // setTask((prevTask) =>[...prevTask, inputValu]); // prevTask is give empty thst is next time give old data
    // consol.log("Nas") // every sec componet r rerander

    setTask((prevTask) =>[...prevTask, {id, content, checked}]); // {id, content, checked} is use becose inputValu is object
    // bouth key and value is same then we can not write like this {id: id, content: content, checked: checked} , write like this {id, content, checked} 
  };

  //  const handleDelet = (value) =>{ // is now parameter
  //   console.log(task);
  //   console.log(value);
  //   const updatdTask = task.filter((curTask) => curTask !== value); // return which eliment is not mach value
  //   // value ko chor ke baki sab ko ak new array me store kar daga , new array ko setTak ma add kar dea , then task update hua , then todo componet re render hua then ui update hua, 
  //   setTask(updatdTask)
  // }


  // todo and data to localStrorage
  // localStorage.setItem(todoKey, JSON.stringify(task));

  setLocalStorageTodoData(task); 
  // handleDelet funtion
  const handleDelet = (value) =>{ 
    const updatdTask = task.filter((curTask) => curTask.content !== value); // curTask is object // curTask !== value => obj is compareing by value
    // curTask.content is use becose curTask is object , then content is string , then string is compareing by value
    setTask(updatdTask);
  }


  // handleClearAllTodoData funtion
  const handleClearAllTodoData = () =>{
    setTask([]);
  }

  // handleCheck funtion

  const handleCheckTodo =(content) =>{
    const updateTask = task.map((curTask) =>{
      if(curTask.content === content){
        return {...curTask, checked: !curTask.checked}; // spread operator // toggle
      }else{
        return curTask; // return unchange data
      }
    });
    setTask(updateTask);
  }
  return(
    <section className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
      <header className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-600">Todo List</h1>
        <TodoDatetime />
      </header>
      <TodoForm onAddTodo={handleFromSubmit}/> {/** onAddTodo is event hansler it is child to parent communication */}
      <section className="mt-4">
        <ul className="space-y-2">
          {/* {task.map((curTask, index) =>{ */}
          {task.map((curTask) =>{
            return (
            <TodoList // component and 3 props pass
            // key={index}
            // data={curTask}
            key={curTask.id}  // bydefault key are used
            data={curTask.content}
            checked={curTask.checked} // curTask is true or false
            onHandleDelet={handleDelet}
            onHandleCheck={handleCheckTodo}
            />
            )
          })}
        </ul>

      </section>
      <section 
        className="mt-6 text-center cursor-pointer text-sm text-red-500 hover:text-red-700"
        onClick={handleClearAllTodoData}>
        Clear All
      </section>
    </section>
  )
}


// note:

// in React evrithing is componet
// any data , which data is chang then this is call state

// error*5
// You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter() method does not execute the function for empty elements.
// filter() method does not change the original array.
// filter() method returns an array


// reusable component
// parent component
// state management
// prop drilling
// child to parent communication
// list rendering
// event handling
// conditional rendering
// form handling
// useEffect
// useState
// react icon
// array method
// filter method
// destructuring
