import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShortcut } from "react-icons/si";
import { RiCloseCircleLine } from "react-icons/ri";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentcolor } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900){
      setActiveMenu
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-indigo-600 text-white text-md m-2 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700 m-2 transition-all duration-300 ease-in-out transform hover:scale-105';

  return (
    <div className={`ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg transition-all duration-500 ${activeMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      {activeMenu && (
        <>
          <div className="flex justify-between items-center p-4 bg-indigo-50 dark:bg-gray-800 rounded-md shadow-md">
            <Link to="/" onClick={handleCloseSideBar}
              className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              <SiShortcut className="text-indigo-600" />
              <span className="text-indigo-600">Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button"
                onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
                className={`text-xl rounded-full p-3 hover:bg-indigo-200 dark:hover:bg-gray-700 transition duration-300 ${activeMenu ? 'block' : 'md:hidden'}`}>
                <RiCloseCircleLine className="text-gray-700 dark:text-white" />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-500 dark:text-gray-400 m-3 mt-4 uppercase text-sm font-semibold">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentcolor : '',
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
