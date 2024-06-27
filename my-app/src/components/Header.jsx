import React, { useState, useEffect, useRef } from "react";
import logo from './Images/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
      <nav className="flex items-center justify-between mx-3 sm:mx-auto py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
        </div>

        {/* Menu Toggle Button */}
        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto mt-4 sm:mt-0 transition-all duration-300 ease-in-out`}
        >
          <li className="mr-3">
            <a
              className="inline-block text-white py-2 px-4 hover:bg-white hover:text-black hover:underline transition duration-300"
              href="#"
              onClick={closeMenu} // Close menu when clicked
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white py-2 px-4 hover:bg-white hover:text-black hover:underline transition duration-300"
              href="#"
              onClick={closeMenu} // Close menu when clicked
            >
              About
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white py-2 px-4 hover:bg-white hover:text-black hover:underline transition duration-300"
              href="#"
              onClick={closeMenu} // Close menu when clicked
            >
              Groups
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block text-white py-2 px-4 hover:bg-white hover:text-black hover:underline transition duration-300"
              href="#"
              onClick={closeMenu} // Close menu when clicked
            >
              Team
            </a>
          </li>
          <li>
            <a
              className="inline-block text-white py-2 px-4 hover:bg-white hover:text-black hover:underline transition duration-300"
              href="#"
              onClick={closeMenu} // Close menu when clicked
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
