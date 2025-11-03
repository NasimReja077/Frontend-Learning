import React from 'react'
import { clearAllUser } from '../store/slices/UserSlice'
import { useDispatch } from "react-redux";

export const DeleteAllUser =()=> {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUser());
  }
  return (
    <>
    <button onClick={deleteUsers}>ClearUser</button>
    </>
  )
}
