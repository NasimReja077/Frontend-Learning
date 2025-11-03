import React from "react";
import { DeleteAllUser } from "./DeleteAllUser.jsx";
import { fakeUserData } from "../api/index";
import { addUser } from "../store/slices/UserSlice";
import { DisplayUsers } from "./DisplayUsers";
import { useDispatch } from "react-redux";

const UserDetails = () => {
  const dispatch = useDispatch(); 
  // The useDispatch() hook is used to send (dispatch) actions to the store.
  // dispatch() sends an action object to Redux.
  // The action is automatically created by the Action Creator from createSlice().

  const addNewUser = (payload) => { //payload = name == fakeUserData
    console.log(payload);
    dispatch(addUser(payload));
  };
  return (
    <section className="mx-8 my-4">
      <div className="content">
        {/* Header Section */}
        <div className="admin-table flex justify-between flex-wrap my-16">
          <div className="admin-subtitle text-4xl font-semibold text-gray-800 mb-4 md:mb-0">
            List of User Details
          </div>
          <button className="btn add-btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out" onClick={() => addNewUser(fakeUserData())}>
            Add New Users
          </button>
        </div>

        {/* User List */}
        <ul className="list-none flex flex-col space-y-2">
          {/* Example items */}
          {/* <li>Hi</li>
          <li>Hii</li> */}
          <DisplayUsers />
        </ul>

        <hr className="my-4 border-gray-300" />

        {/* Delete All Button Component */}
        <DeleteAllUser />
      </div>
    </section>
  );
};

export default UserDetails;


/**
 * The React Component (Write/Dispatch) - 
This component handles the Action Dispatching.

useDispatch(): The React-Redux hook that provides the dispatch function, which is the only way to trigger a state change in Redux.

addNewUser function: It calls the action creator: addUser(payload). This returns an action object (e.g., { type: 'user/addUser', payload: 'New User Name' }).It sends the action object to Redux: dispatch(...).

UI Link: When the "Add New Users" button is clicked, it calls addNewUser(fakeUserData()), which generates a fake name and dispatches the action, causing the state to update via the addUser reducer.
 */