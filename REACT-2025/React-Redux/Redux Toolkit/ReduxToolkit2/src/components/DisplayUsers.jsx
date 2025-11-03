import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser} from "../store/slices/UserSlice";
export const DisplayUsers =()=> {
     const dispatch = useDispatch(); // Send actions to reducers

//useSelector()-Read data from Redux store -> useSelector((state) => state.user)
// useSelector() hook automatically fetches the latest data.
     const data = useSelector((state) => {
          return state.users;
     })
     console.log(data)

     // const deleteUser = (user) =>{
     //      dispatch(removeUser(user))
     // }
     const deleteUser = (id) =>{
          dispatch(removeUser(id))
     }
  return (
    <>
    {
     data.map((user, id) =>{
          return <li key={id} className="flex items-center justify-between px-4 py-3 bg-amber-200 rounded-md shadow-sm hover:shadow-md transition">
               <p className="font-medium text-gray-800">{user}</p>
               
               <button className="p-2 rounded-md hover:bg-red-50 focus:ring-2 focus:ring-red-200 text-red-600" onClick={() => deleteUser(id)}>
                    <MdDeleteForever className="text-2xl"/>
               </button>
          </li>
     })
    }
    </>
  )
}

/**
 * The React Component (Read/Display) - 
This component handles Reading and Rendering the state data.

useSelector(): The React-Redux hook used to read data from the Redux store.

const data = useSelector((state) => state.users); Subscribes the component to the users slice of the state. Any time the users state changes, this component automatically re-renders with the new data.

Reading/Rendering: It maps over the data array (data.map(...)) and renders a list item (<li>) for each user.

Deleting: The trash icon button calls deleteUser(id).
deleteUser calls dispatch(removeUser(id)), sending the index (id) of the user to be removed.

This triggers the removeUser reducer in the slice, which updates the state, causing DisplayUsers to re-render.
 */