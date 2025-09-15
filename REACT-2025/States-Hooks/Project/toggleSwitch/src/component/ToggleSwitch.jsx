import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const checkIsOn = isOn ? "on" : "off";
  const translateBnt = isOn ? "translate-x-8" : "translate-x-1"
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Toggle Wrapper */}
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none 
          ${isOn ? "bg-green-500" : "bg-gray-400"}`}
      >
        {/* Circle */}
        <span
          className={`inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300
            ${translateBnt}`}
        />
      </button>

      {/* Label */}
      <span
        className={`ml-3 text-lg font-medium ${
          isOn ? "text-green-600" : "text-gray-600"
        }`}
      >
        {checkIsOn}
      </span>
    </div>
  );
};

export default ToggleSwitch;
