import React from 'react'
import { NavLink } from "react-router-dom";
const Header =()=> {
  // Dynamic class for active NavLink
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 transition"
      : "text-gray-700 hover:text-blue-500 transition";

  return (
    <header className='bg-white shadow-md e-sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/**Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">ReactQuery</NavLink>
        <ul className="flex gap-6 text-gray-700" >

          <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
          <li><NavLink to="/trad" className={getNavLinkClass}>FetchOld</NavLink></li>
          <li><NavLink to="/rq" className={getNavLinkClass}>FetchQuery</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header