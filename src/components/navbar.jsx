import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    airports: false,
    areas: false,
    stations: false,
    services: false,
  });

  const location = useLocation();

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setDropdowns({ airports: false, areas: false, stations: false, services: false });
    setMobileMenuOpen(false);
  }, [location]);

  const toggleDropdown = (type) => {
    setDropdowns((prev) => ({
      airports: false,
      areas: false,
      stations: false,
      services: false,
      [type]: !prev[type],
    }));
  };

  return (
    <nav className="text-black bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Taxi Airport Luton" className="h-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>

            {/* Airports Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('airports')}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Airports
                <svg className={`w-4 h-4 transition-transform ${dropdowns.airports ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdowns.airports && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50">
                  <Link to="/londonAirport" className="block px-4 py-2 hover:bg-gray-100">London Airport</Link>
                  <Link to="/gatwickAirport" className="block px-4 py-2 hover:bg-gray-100">Gatwick Airport</Link>
                  <Link to="/stanstedAirport" className="block px-4 py-2 hover:bg-gray-100">Stansted Airport</Link>
                  <Link to="/heathrowAirport" className="block px-4 py-2 hover:bg-gray-100">Heathrow Airport</Link>
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('areas')}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Areas
                <svg className={`w-4 h-4 transition-transform ${dropdowns.areas ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdowns.areas && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50">
                  <Link to="/london" className="block px-4 py-2 hover:bg-gray-100">London Taxi</Link>
                  <Link to="/eastLondon" className="block px-4 py-2 hover:bg-gray-100">East London Taxi</Link>
                  <Link to="/westLondon" className="block px-4 py-2 hover:bg-gray-100">West London Taxi</Link>
                  <Link to="/northLondon" className="block px-4 py-2 hover:bg-gray-100">North London Taxi</Link>
                  <Link to="/southLondon" className="block px-4 py-2 hover:bg-gray-100">South London Taxi</Link>
                  <Link to="/centralLondon" className="block px-4 py-2 hover:bg-gray-100">Central London Taxi</Link>
                </div>
              )}
            </div>

            {/* Stations Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('stations')}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                Stations
                <svg className={`w-4 h-4 transition-transform ${dropdowns.stations ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdowns.stations && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50">
                      <Link to="/paddingtonStation" className="block hover:bg-gray-100 px-2 py-1">Paddington</Link>
                      <Link to="/eustonStation" className="block hover:bg-gray-100 px-2 py-1">Euston</Link>
                      <Link to="/charingCrossStation" className="block hover:bg-gray-100 px-2 py-1">Charing Cross</Link>
                      <Link to="/kingsCrossStation" className="block hover:bg-gray-100 px-2 py-1">Kings Cross</Link>
                      <Link to="/londonBridgeStation" className="block hover:bg-gray-100 px-2 py-1">London Bridge</Link>
                      <Link to="/VictoriaStation" className="block hover:bg-gray-100 px-2 py-1">Victoria</Link>
                      <Link to="/waterlooStation" className="block hover:bg-gray-100 px-2 py-1">Waterloo</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="hover:text-yellow-400 flex items-center gap-1"
              >
                services
                <svg className={`w-4 h-4 transition-transform ${dropdowns.services ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdowns.services && (
                <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-48 z-50">
                      <Link to="/petServices" className="block hover:bg-gray-100 px-2 py-1">Luton Pet Service</Link>
                      <Link to="/hotelServices" className="block hover:bg-gray-100 px-2 py-1">Luton Hotel Transfer</Link>                
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
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
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-2 text-left">
          <Link to="/" className="block hover:bg-gray-800 px-2 py-1">Home</Link>
          <Link to="/about" className="block hover:bg-gray-800 px-2 py-1">About</Link>

          {/* Mobile Dropdowns */}
          {['airports', 'areas', 'stations', 'services'].map((type) => (
            <div key={type}>
              <button
                onClick={() => toggleDropdown(type)}
                className="w-full text-left hover:bg-gray-800 px-2 py-1 capitalize"
              >
                {type}
              </button>
              {dropdowns[type] && (
                <div className="ml-4 space-y-1">
                  {type === 'airports' && (
                    <>
                  <Link to="/londonAirport" className="block px-4 py-2 hover:bg-gray-100">London Airport</Link>
                  <Link to="/gatwickAirport" className="block px-4 py-2 hover:bg-gray-100">Gatwick Airport</Link>
                  <Link to="/stanstedAirport" className="block px-4 py-2 hover:bg-gray-100">Stansted Airport</Link>
                  <Link to="/heathrowAirport" className="block px-4 py-2 hover:bg-gray-100">Heathrow Airport</Link>
                    </>
                  )}
                  {type === 'areas' && (
                    <>
                      <Link to="/london" className="block px-4 py-2 hover:bg-gray-100">London Taxi</Link>
                      <Link to="/eastLondon" className="block px-4 py-2 hover:bg-gray-100">East London Taxi</Link>
                      <Link to="/westLondon" className="block px-4 py-2 hover:bg-gray-100">West London Taxi</Link>
                      <Link to="/northLondon" className="block px-4 py-2 hover:bg-gray-100">North London Taxi</Link>
                      <Link to="/southLondon" className="block px-4 py-2 hover:bg-gray-100">South London Taxi</Link>
                      <Link to="/centralLondon" className="block px-4 py-2 hover:bg-gray-100">Central London Taxi</Link>
                    </>
                  )}
                  {type === 'stations' && (
                    <>
                      <Link to="/paddingtonStation" className="block hover:bg-gray-100 px-2 py-1">Paddington</Link>
                      <Link to="/eustonStation" className="block hover:bg-gray-100 px-2 py-1">Euston</Link>
                      <Link to="/charingCrossStation" className="block hover:bg-gray-100 px-2 py-1">Charing Cross</Link>
                      <Link to="/kingsCrossStation" className="block hover:bg-gray-100 px-2 py-1">Kings Cross</Link>
                      <Link to="/londonBridgeStation" className="block hover:bg-gray-100 px-2 py-1">London Bridge</Link>
                      <Link to="/VictoriaStation" className="block hover:bg-gray-100 px-2 py-1">Victoria</Link>
                      <Link to="/waterlooStation" className="block hover:bg-gray-100 px-2 py-1">Waterloo</Link>
                    </>
                  )}
                  {type === 'services' && (
                    <>
                      <Link to="/petServices" className="block hover:bg-gray-100 px-2 py-1">Luton Pet Service</Link>
                      <Link to="/hotelServices" className="block hover:bg-gray-100 px-2 py-1">Luton Hotel Transfer</Link> 
                    </>
                  )}
                </div>
              )}
            </div>
          ))}

          <Link to="/contact" className="block hover:bg-gray-800 px-2 py-1">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
