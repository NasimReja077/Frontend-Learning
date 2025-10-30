import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTasks, deleteTasks, fetchTask } from "../store";

export const Todo = () => {
     const [task, setTask] = useState("")

     const tasks = useSelector((state) => state.task); //Access Redux State in React , Read Data from the Redux Store using useSelector
     // console.log("react states", state.task);

     // Dispatch Actions in React using Redux: Add and Delete Tasks with useDispatch
     const dispatch= useDispatch();

     // handle Form Submit
     const handleFormSubmit = (e) => {
          e.preventDefault();
          dispatch(addTasks(task));
          return setTask("");
     }

     // handle Task Delete
     const handleTaskDelete = (id) =>{
          return dispatch(deleteTasks(id));
     };

     const handleFetchTasks = () =>{
          dispatch(fetchTask())
     };

     return (
          <div className="container flex item-center bg-pink-500">
               <div>
                    <h1>ToDo-List</h1>
                    <div>
                         <form onSubmit={handleFormSubmit}>
                              <input type="text" id="input-box" placeholder="Add a new Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                              <button>Add Task</button>
                         </form>
                    </div>
                    <button onClick={handleFetchTasks}>Fetch Tasks</button>
                    <ul>
                         {tasks.map((curTask, index) => {
                              return (
                                   <li key={index}>
                                        <p>
                                             {index}:{curTask}
                                        </p>
                                        <MdDeleteForever 
                                        onClick={() => handleTaskDelete(index)}
                                        />
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </div>
     );
};