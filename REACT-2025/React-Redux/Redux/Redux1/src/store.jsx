/* eslint-disable no-case-declarations */
// Create Reducer Functions to Add & delete
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from 'redux-thunk';

const Add_Task = "task/add";
const Delete_Task = "task/delete";
const Fetch_Task = "task/fetch";
const initialState = {
     // task=[] not use when use obj
     task: [], // key valu paer
     isLoading: false,
};

// Step 1: Create a simplereducer function
const taskReducer = (state = initialState, action) =>{
     switch (action.type){
          case Add_Task:
               return{
                    ...state,
                    task:[...state.task, action.payload],
               };
          case Delete_Task:
               const updatedTask = state.task.filter((curTask, index) => {
                    return index !== action.payload;
               });
               return{
                    ...state,
                    task: updatedTask,
               };
          case Fetch_Task:
               return {
                    ...state,
                    task: [...state.task, ...action.payload],
               };
               default:
                    return state;
     }
};

// Redux Store: Create, Dispatch & Get State in React
// Step 2: Create the Redux store using the reducer
export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

// Step 3: Log the initial state
// The getState method is a synchronous function that returns the current state of a Redux
// application. It includes the entire state of the application, including all the reducers
// and their respective states.
console.log("initial State: ", store.getState());

// Step 5: Create action creators
export const addTasks = (data) =>{
     return { type: Add_Task, payload: data};
};

export const deleteTasks = (id) =>{
     return { type: Delete_Task, payload: id};
};


// Step 4: Dispatch an action to add a task 

// store.dispatch({ type: Add_Task, payload: "Hi I am Redax" });
store.dispatch( addTasks ("Hi I am Redax" ));
console.log("updated State: ", store.getState());

// store.dispatch({ type: Add_Task, payload: "MY Name Is Hero" });
store.dispatch( addTasks ("MY Name Is Hero" ));
console.log("updated State: ", store.getState());

// store.dispatch({ type: Delete_Task, payload: 1});
store.dispatch(deleteTasks(1));
console.log("deleted State: ", store.getState());

// Redux Thunk in React: Fetch and Add API Data
export const fetchTask = () => {
     return async (dispatch) => {
          try {
               const res = await fetch(
                    "https://jsonplaceholder.typicode.com/todos?_limit=5"
               );
               const task = await res.json();
               dispatch({ type: Fetch_Task, payload: task.map((curTask) => curTask.title),
               });
          } catch (error) {
               console.log(error);
          }
     }
}

