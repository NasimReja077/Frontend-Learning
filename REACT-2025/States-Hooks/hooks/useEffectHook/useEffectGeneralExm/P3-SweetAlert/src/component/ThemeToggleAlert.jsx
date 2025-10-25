import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ThemeToggleAlert = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      Swal.fire({
        title: "🌙 Dark Mode Enabled",
        text: "Your eyes will thank you!",
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "☀️ Light Mode Enabled",
        text: "Let’s brighten things up!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-3">Theme Mode Example</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-5 py-2 rounded-lg font-semibold text-white ${
          darkMode ? "bg-yellow-500" : "bg-blue-600"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

