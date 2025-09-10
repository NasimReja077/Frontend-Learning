import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-4 p-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        onClick={() => handleClick && handleClick()}
        aria-label={item.name}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-[240px] py-10 px-4 bg-[#191624] shadow-lg ">
        <img src={logo} alt="logo" className="w-full h-14 object-contain mb-8" />
        <NavLinks />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="absolute md:hidden top-6 right-3 z-20">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-8 h-8 text-white cursor-pointer" onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu" />
        ) : (
          <RiCloseLine className="w-8 h-8 text-white cursor-pointer" onClick={() => setMobileMenuOpen(false)} aria-label="Close Menu" />
        )}
      </div>

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-purple-600 to-blue-600 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'} transition-all duration-500`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain mb-8" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
