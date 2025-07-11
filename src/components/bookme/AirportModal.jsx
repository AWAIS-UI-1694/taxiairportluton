import React from 'react';
import { FaTimes } from 'react-icons/fa';

const airports = [
  { value: 'LONDON HEATHROW AIRPORT TERMINAL 1 | TW6 1AP', label: 'HEATHROW TERMINAL 1' },
  { value: 'LONDON HEATHROW AIRPORT TERMINAL 2 | TW6 1EW', label: 'HEATHROW TERMINAL 2' },
  { value: 'LONDON HEATHROW AIRPORT TERMINAL 3 | TW6 1QG', label: 'HEATHROW TERMINAL 3' },
  { value: 'LONDON HEATHROW AIRPORT TERMINAL 4 | TW6 3XA', label: 'HEATHROW TERMINAL 4' },
  { value: 'LONDON HEATHROW AIRPORT TERMINAL 5 | TW6 2GA', label: 'HEATHROW TERMINAL 5' },
  { value: 'LONDON GATWICK AIRPORT NORTH TERMINAL | RH6 0PJ', label: 'GATWICK NORTH TERMINAL' },
  { value: 'LONDON GATWICK AIRPORT SOUTH TERMINAL | RH6 0NP', label: 'GATWICK SOUTH TERMINAL' },
  { value: 'LONDON CITY AIRPORT | E16 2PX', label: 'LONDON CITY' },
  { value: 'LONDON STANSTED AIRPORT | CM24 1RW', label: 'STANSTED' },
  { value: 'LONDON LUTON AIRPORT | LU2 9QT', label: 'LUTON' },
];

const AirportModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Airports</h2>
          <button onClick={onClose} className="">
            <FaTimes className="text-red-500 cursor-pointer" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {airports.map((airport) => (
            <button
              key={airport.value}
              onClick={() => {
                onSelect(airport.value);
                onClose();
              }}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              {airport.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-yellow-500 text-black px-4 py-2 rounded w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirportModal;