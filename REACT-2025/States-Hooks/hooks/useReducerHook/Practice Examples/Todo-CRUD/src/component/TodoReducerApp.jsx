import { useReducer } from "react"

export const TodoReducerApp =()=> {
     const [todos, dispatch] = useReducer(todoReducer, []);

     const todoReducer(state, action){
          switch(action.type){
               case "Add_Todo":
                    return [...state, {id: Date.now(), text: action.action.payload, completed: false}];
               case "Delete_Todo":
                    return state.filter(todos)
          }
     }
  return (
    <div className="p-6 max-w-md mx-auto shadow-xl rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Todo List (useReducer)</h2>
      <div className="flex mb-4">
          <input placeholder="Enter Today Task" className="border p-2 flex-grow rounded-l-lg "/>
          <button></button>
      </div>
      <ul>

      </ul>
     </div>
  )
}