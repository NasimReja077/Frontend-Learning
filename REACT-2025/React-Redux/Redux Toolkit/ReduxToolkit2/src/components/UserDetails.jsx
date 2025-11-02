import React from "react";
// import { DeleteAllUser } from "./DeleteAllUser.jsx";

const UserDetails = () => {
  return (
    <section className="mx-8 my-4">
      <div className="content">
        {/* Header Section */}
        <div className="admin-table flex justify-between flex-wrap my-16">
          <div className="admin-subtitle text-4xl font-semibold text-gray-800 mb-4 md:mb-0">
            List of User Details
          </div>
          <button className="btn add-btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out">
            Add New Users
          </button>
        </div>

        {/* User List */}
        <ul className="list-none flex flex-col space-y-2">
          {/* Example items */}
          {/* <li>Hi</li>
          <li>Hii</li> */}
        </ul>

        <hr className="my-4 border-gray-300" />

        {/* Delete All Button Component */}
        {/* <DeleteAllUser /> */}
      </div>
    </section>
  );
};

export default UserDetails;
