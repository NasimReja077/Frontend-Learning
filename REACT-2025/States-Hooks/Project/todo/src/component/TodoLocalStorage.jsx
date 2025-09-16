// export const TodoLocalStorage = () =>{

// }

const todoKey = "reactTodo"; // localStorage key 

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey); // get this data string formmat but initial data is array
    if (!rawTodos) return [];
    return JSON.parse(rawTodos)
};

export const setLocalStorageTodoData = (task) => {
     return localStorage.setItem(todoKey, JSON.stringify(task));
}