import React from 'react';

const Header = ({ category, title }) => (
  <div className="mb-10">
    <p className="text-lg text-gray-400 dark:text-gray-300 transition-colors duration-300">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-100 transition-colors duration-300">
      {title}
    </p>
    <div className="h-1 w-20 bg-custom-blue rounded mt-2"></div>
  </div>
);

export default Header;
