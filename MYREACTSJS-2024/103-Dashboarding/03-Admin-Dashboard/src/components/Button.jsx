import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius, width, bgHoverColor, icon, hoverEffect }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} ${size} ${width} ${hoverEffect && 'transition-transform duration-300 hover:scale-105'}`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
