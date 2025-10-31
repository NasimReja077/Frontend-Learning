import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, deleteTasks } from "../features/tasks/taskSlice";

export const Todo = () => {  
     const [userTask, setUserTask] = useState("");
     const tasks = useSelector((state) => state.taskReducer.task);

     const dispatch = useDispatch();

     // handle Form Submit
          const handleFormSubmit = (e) => {
               e.preventDefault();
               dispatch(addTasks(userTask));
               setUserTask("");
          };
     
          // handle Task Delete
          const handleTaskDelete = (index) =>{
               dispatch(deleteTasks(index));
          };

     return (
          <div className="container flex item-center bg-pink-500">
               <div>
                    <h1>ToDo-List</h1>
                    <div>
                         <form onSubmit={handleFormSubmit}>
                              <input type="text" id="input-box" placeholder="Add a new Task" value={userTask} onChange={(e) => setUserTask(e.target.value)}/>
                              <button>Add Task</button>
                         </form>
                    </div>
                   

                    <ul>
                         {tasks?.map((curTask, index) => {
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