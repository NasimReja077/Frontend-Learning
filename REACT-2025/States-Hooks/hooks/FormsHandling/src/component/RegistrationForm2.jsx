/* Using Object State with Spread Operator
//todo Tasks:
//? Refactor the registration form to use a single object (formData) as the initial state.
//? Update input fields to use object properties.
//? Use the spread operator to update the form data state efficiently.
//? Discuss the benefits of using object state over multiple state variables.
*/

import React, { useState } from "react";

export const RegistrationForm2 = () => {
  // one state vareable and initial value convert to object (key, value)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setUser((prev) => ({...prev, name: value})); 

    //(prev) => {...} is an arrow function that receives the previous state as a parameter (prev)

    // The {...prev} is using the spread operator to create a new object that copies all properties from the previous state

    // , name: value} adds or updates the name property with the new value
    // but we exgest thig valu update then we creat dinamic
    setUser((prev) => ({ ...prev, [name]: value }));
    // [name]: value uses computed property syntax to dynamically update a property 
    // When this runs with name="email" and value="new@example.com"

    // when [name] this is not mach with formData then creat new propaty if mach this propaty then update
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center min-h-screen bg-gray-100"
      >
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">
            Sign Up
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Please fill in this form to create an account.
          </p>

          {/* First Name */}
          <label htmlFor="firstName" className="block text-sm font-semibold mb-1">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName" /* name attribute */
            placeholder="Enter Your First Name"
            required
            value={user.firstName}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Last Name */}
          <label htmlFor="lastName" className="block text-sm font-semibold mb-1">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            required
            value={user.lastName}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            required
            value={user.email}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-semibold mb-1">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            required
            value={user.password}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Phone */}
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            <b>Phone Number</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            placeholder="9123456789"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Terms */}
          <p className="text-xs text-gray-500 mb-6">
            By creating an account you agree to our{" "}
            <a href="#" className="text-pink-500 hover:underline">
              Terms & Privacy
            </a>
          </p>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>

      {/* Live Preview Section */}
      <section className="p-6 bg-gray-50 text-center">
        <p className="text-lg text-gray-700">
          Hello, my name is{" "}
          <span className="font-semibold text-indigo-600">
            {user.firstName} {user.lastName}
          </span>
          . My email is{" "}
          <span className="font-semibold text-green-600">{user.email}</span> and
          my phone number is{" "}
          <span className="font-semibold text-purple-600">
            {user.phoneNumber}
          </span>
          .
        </p>
      </section>
    </>
  );
};
