import React, { useEffect, useState } from "react";

export const HookChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("nasim");

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]); // [state varialb] value change then call useEffect

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">
          React useEffect Hook Challenge
        </h1>

        {/* Counter Section */}
        <p className="text-lg text-gray-700 mb-2">
          Count: <span className="font-bold text-indigo-500">{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition-all duration-200 mb-6"
        >
          Increment
        </button>

        {/* Name Section */}
        <p className="text-lg text-gray-700 mb-2">
          Name: <span className="font-semibold text-pink-600">{name}</span>
        </p>
        <input
          type="text"
          name="texts"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
    </div>
  );
};
