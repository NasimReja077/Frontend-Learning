import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
     task: [], // key valu paer
};

// RTK Slice
const taskReducer = createSlice({
     name: "task",
     initialState,
     reducers: {
          addTasks(state, action){
               state.task.push(action.payload);
               // state.task = [ ...state.task, action.payload],
          },
          deleteTasks(state, action){
               state.task = state.task.filter(
                    (curTask, index) => index !== action.payload
               );
          },
     },
})
console.log(taskReducer);

const { addTasks, deleteTasks } = taskReducer.actions;


// New
export const store = configureStore({
     reducer:{
          // taskReducer:taskReducer, // key / valu
          taskReducer: taskReducer.reducer,
     },
});

// Step 3: Log the initial state
console.log(store.getState());

// Step 4: Dispatch an action to add a task 
console.log(store.dispatch(addTasks("Buy Book")));
console.log(store.getState());

console.log(store.dispatch(addTasks("Buy Pan")));
console.log(store.dispatch(deleteTasks(1)));
console.log(store.getState());

console.log(store.dispatch(addTasks("Good Night")));
console.log(store.getState());

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

