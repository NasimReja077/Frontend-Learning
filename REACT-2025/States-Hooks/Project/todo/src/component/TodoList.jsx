import { AiOutlineDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"

// export const TodoList = ({ key, data, onHandleDelet }) =>{
export const TodoList = ({ data, checked, onHandleDelet, onHandleCheck }) =>{
     return(
          // <li key={key}>
          <li className="flex items-center justify-between bg-gray-100 p-2 rounded-lg shadow-sm">
               <span
               className={checked ? "line-through text-gray-500" : "text-gray-800"}>{data}</span>
               <div className="flex gap-2">
                 <button 
                   onClick={() => onHandleDelet(data)} 
                   className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                     <AiOutlineDelete/>
                 </button>
                 <button 
                   onClick={() => onHandleCheck(data)}
                   className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                     <FaCheck />
                 </button>   
               </div>
          </li>
     )
}

//  <button onClick={() => onHandleCheck(data)}><FaCheck /></button>  
// passing data becose compearing by value // compareing user which data is click and compareing or cheking object // which data pass in array of a object mach this data are chack or uncheck
