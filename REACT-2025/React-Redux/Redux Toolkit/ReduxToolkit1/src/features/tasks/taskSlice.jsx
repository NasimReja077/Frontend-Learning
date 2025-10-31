import { createSlice } from "@reduxjs/toolkit";

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

export const { addTasks, deleteTasks } = taskReducer.actions;
export default taskReducer.reducer;
