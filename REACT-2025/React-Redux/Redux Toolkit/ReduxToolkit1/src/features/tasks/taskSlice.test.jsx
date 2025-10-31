import { store } from "../../store";
import { addTasks, deleteTasks } from "../../features/tasks/taskSlice";
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