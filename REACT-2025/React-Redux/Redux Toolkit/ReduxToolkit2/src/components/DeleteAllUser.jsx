import React from 'react'
// import { clearAllUser } from '../store/slices/UserSlice'
import { clearAllUser } from '../store/actions';
import { useDispatch } from "react-redux";

export const DeleteAllUser =()=> {
  const dispatch = useDispatch();
  
  const deleteUsers = () => {
    dispatch(clearAllUser());
  }
  return (
    <div className="mt-6 flex justify-end">
      <button
        onClick={deleteUsers}
        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300 text-white px-4 py-2 rounded-md shadow-sm transition"
        aria-label="Clear all users"
      >
        Clear Users
      </button>
    </div>
  )
}
