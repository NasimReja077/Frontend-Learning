import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";


// New
export const store = configureStore({
     reducer:{
          // taskReducer:taskReducer, // key / valu
          taskReducer: taskReducer,
     },
});



// Redux Thunk in React: Fetch and Add API Data
// export const fetchTask = () => {
//      return async (dispatch) => {
//           try {
//                const res = await fetch(
//                     "https://jsonplaceholder.typicode.com/todos?_limit=5"
//                );
//                const task = await res.json();
//                dispatch({ type: Fetch_Task, payload: task.map((curTask) => curTask.title),
//                });
//           } catch (error) {
//                console.log(error);
//           }
//      }
// }

