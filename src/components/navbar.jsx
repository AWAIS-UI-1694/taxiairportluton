import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className=" text-black bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Taxi Airport Luton" className="h-18" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="hover:text-yellow-400">Home</a>
            <a href="/about" className="hover:text-yellow-400">About</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Airports
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-10">
                  <a href="/airport-transfer" className="block px-4 py-2 hover:bg-gray-100">Airport Transfer</a>
                  <a href="/city-rides" className="block px-4 py-2 hover:bg-gray-100">City Rides</a>
                </div>
              )}
            </div>

             <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Areas
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-10">
                  <a href="/airport-transfer" className="block px-4 py-2 hover:bg-gray-100">Airport Transfer</a>
                  <a href="/city-rides" className="block px-4 py-2 hover:bg-gray-100">City Rides</a>
                </div>
              )}
            </div>

             <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Stations
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-10">
                  <a href="/airport-transfer" className="block px-4 py-2 hover:bg-gray-100">Airport Transfer</a>
                  <a href="/city-rides" className="block px-4 py-2 hover:bg-gray-100">City Rides</a>
                </div>
              )}
            </div>

            <a href="/contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-2">
          <a href="/" className="block hover:bg-gray-800 px-2 py-1">Home</a>
          <a href="/about" className="block hover:bg-gray-800 px-2 py-1">About</a>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:bg-gray-800 px-2 py-1"
            >
              Airports
            </button>
            {dropdownOpen && (
              <div className="ml-4">
                <a href="/airport-transfer" className="block hover:bg-gray-700 px-2 py-1">Airport Transfer</a>
                <a href="/city-rides" className="block hover:bg-gray-700 px-2 py-1">City Rides</a>
              </div>
            )}
          </div>

           <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:bg-gray-800 px-2 py-1"
            >
              Areas
            </button>
            {dropdownOpen && (
              <div className="ml-4">
                <a href="/airport-transfer" className="block hover:bg-gray-700 px-2 py-1">Airport Transfer</a>
                <a href="/city-rides" className="block hover:bg-gray-700 px-2 py-1">City Rides</a>
              </div>
            )}
          </div>

           <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:bg-gray-800 px-2 py-1"
            >
              Stations
            </button>
            {dropdownOpen && (
              <div className="ml-4">
                <a href="/airport-transfer" className="block hover:bg-gray-700 px-2 py-1">Airport Transfer</a>
                <a href="/city-rides" className="block hover:bg-gray-700 px-2 py-1">City Rides</a>
              </div>
            )}
          </div>

          <Link to="/contact.jsx" className="block hover:bg-gray-800 px-2 py-1">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
