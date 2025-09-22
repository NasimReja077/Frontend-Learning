// ShortCircuitsEvaluationSwitch.jsx
import React, { useState } from "react";

export const ShortCircuitsEvaluationSwitch = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState(0); // Example for OR operator
  const [notification, setNotification] = useState("Welcome Back!"); // Example for AND operator

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-indigo-600">
          Welcome to Short Circuit Evaluation Topic!
        </h1>

        {/* Example 1: AND (&&) */}
        {isLoggedIn && (
          <p className="text-green-600 font-medium mb-2">
            ✅ You are logged in!
          </p>
        )}

        {/* Example 2: Ternary for user */}
        <p className="text-gray-700 mb-6">
          {user ? `Hello, ${user}! 🎉` : "⚠️ Please log in..."}
        </p>

        {/* Example 3: OR (||) - Fallback value */}
        <p className="text-blue-600 mb-2">
          🛒 Cart: {cartItems || "Cart is empty"}
        </p>

        {/* Example 4: AND (&&) - Only show if notification exists */}
        {notification && (
          <p className="text-purple-600 mb-2">🔔 {notification}</p>
        )}

        {/* Example 5: Mixed condition */}
        <p className="text-orange-600 mb-6">
          {isLoggedIn && user
            ? `Welcome back, ${user}!`
            : "Please login and set your name."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
          >
            Toggle Login State
          </button>
          <button
            onClick={() => setUser("Nasim Reja")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            Set User
          </button>
          <button
            onClick={() => setUser("")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            Clear User
          </button>
          <button
            onClick={() => setCartItems(cartItems + 1)}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setCartItems(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
          >
            Clear Cart
          </button>
          <button
            onClick={() =>
              setNotification(notification ? "" : "You got a new message!")
            }
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Toggle Notification
          </button>
        </div>
      </div>
    </section>
  );
};
