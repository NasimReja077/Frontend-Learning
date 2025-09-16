import { AiOutlineDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"

// export const TodoList = ({ key, data, onHandleDelet }) =>{
export const TodoList = ({ data, checked, onHandleDelet, onHandleCheck }) =>{
     return(
          // <li key={key}>
          <li>
               <span
               className={checked ? "checkList" : "notCheckList"}>{data}</span>
               <button onClick={() => onHandleDelet(data)} ><AiOutlineDelete/></button>
               <button onClick={() => onHandleCheck(data)}><FaCheck /></button>     
          </li>
     )
}

//  <button onClick={() => onHandleCheck(data)}><FaCheck /></button>  
// passing data becose compearing by value // compareing user which data is click and compareing or cheking object // which data pass in array of a object mach this data are chack or uncheck