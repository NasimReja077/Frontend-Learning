import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";

export const Todo = () => {  
     const tasks = useSelector((state) => state.taskReducer));

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
                    {/* <button onClick={handleFetchTasks}>Fetch Tasks</button> */}
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