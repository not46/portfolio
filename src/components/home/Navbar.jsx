import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mx-4 my-4 ">
      <div className="h-16 flex justify-between items-center mx-auto border-none px-5 bg-slate-600 rounded-[150px]">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/"><img className='w-16' src="logo.png" alt="Logo" /></NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl mr-4 p-2 rounded-full focus:outline-none"
          >
            {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Links for Desktop */}
        <ul className="hidden md:flex space-x-7 text-lg items-center">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-black ${isActive ? 'bg-green-500 border-0 px-4 py-2 rounded-[100px] text-white' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-black ${isActive ? 'bg-green-500 border-0 px-4 py-2 rounded-[100px] text-white' : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/work" 
              className={({ isActive }) => `text-black ${isActive ? 'bg-green-500 border-0 px-4 py-2 rounded-[100px] text-white' : ''}`}>
              Work
            </NavLink>
          </li>
        </ul>

        {/* Contact Button for Desktop */}
        <div className="hidden md:block">
          <NavLink to="/contact" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mr-5">
            Hire Me
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Transition */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full z-[1000] bg-slate-800 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
        style={{ width: '75%' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-3xl p-2 rounded-full focus:outline-none">
            <RxCross2 />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 text-lg ml-7 mt-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-slate-200 text-lg px-20 py-2 rounded-[100px]  ${isActive ? 'bg-green-500 border-0 px-20 py-2 rounded-[100px] text-white': ''}`} 
              onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-slate-200 px-20 py-2 rounded-[100px] ${isActive ? 'bg-green-500 border-0 px-20 py-2 rounded-[100px] text-white' : ''}`} 
              onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/work" 
              className={({ isActive }) => `text-slate-200 px-20 py-2 rounded-[100px] ${isActive ? 'bg-green-500 border-0 px-20 py-2 rounded-[100px] text-white' : ''}`} 
              onClick={toggleMenu}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="hover:text-blue-600 px-20 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" 
              onClick={toggleMenu}>
               Hire Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
