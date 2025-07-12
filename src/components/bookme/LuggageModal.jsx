import React from 'react';
import { FaTimes } from 'react-icons/fa';

const LuggageModal = ({ isOpen, onClose, onSelect }) => {
  const items = [
    {
      category: 'Luggage',
      options: [
        { name: 'Hand Luggage', type: 'cabin' },
        { name: 'Suitcase', type: 'checkin' },
        { name: 'Backpack', type: 'cabin' },
      ],
    },
    {
      category: 'Boxes',
      options: [
        { name: 'Small Box (14x12x15 inches)', type: 'cabin' },
        { name: 'Medium Box (16x16x16 inches)', type: 'checkin' },
        { name: 'Large Box (20x20x20 inches)', type: 'checkin' },
        { name: 'XL Box (24x24x33 inches)', type: 'checkin' },
      ],
    },
    {
      category: 'Outdoor Items',
      options: [
        { name: 'Tent', type: 'checkin' },
        { name: 'Large Rucksack', type: 'checkin' },
        { name: 'Ironing Board', type: 'checkin' },
        { name: 'Pair of Skis', type: 'checkin' },
        { name: 'Snowboard', type: 'checkin' },
        { name: 'Bike', type: 'checkin' },
        { name: 'Bike Box', type: 'checkin' },
        { name: 'Golf Bag', type: 'checkin' },
      ],
    },
    {
      category: 'Pets',
      options: [
        { name: 'Small Pet (in cage)', type: 'passenger' },
        { name: 'Large Dog', type: 'passenger' },
      ],
    },
    {
      category: 'Household Items',
      options: [
        { name: 'TV (less than 30 inches)', type: 'checkin' },
        { name: 'TV (30 to 60 inches)', type: 'checkin' },
        { name: 'Music Speaker (Large)', type: 'checkin' },
        { name: 'Mirror (up to 60x36 inches)', type: 'checkin' },
        { name: 'Rug (up to 24x84 inches)', type: 'checkin' },
        { name: 'Single Mattress', type: 'checkin' },
        { name: 'Bedside Table (45x55cm)', type: 'checkin' },
        { name: 'Microwave Oven', type: 'checkin' },
        { name: 'Vacuum Cleaner', type: 'checkin' },
        { name: 'TV Stand', type: 'checkin' },
        { name: 'Musical Instrument (up to 60x24 inches)', type: 'checkin' },
      ],
    },
    {
      category: 'Child Items',
      options: [
        { name: 'Child Seat 1 Year', type: 'passenger' },
        { name: 'Child Seat 2 Year', type: 'passenger' },
        { name: 'Child Seat 3 Year', type: 'passenger' },
        { name: 'Child Seat 4 Year', type: 'passenger' },
        { name: 'Child Seat 5 Year', type: 'passenger' },
        { name: "Child's Pram", type: 'checkin' },
        { name: "Child's Foldable Pushchair", type: 'checkin' },
      ],
    },
  ];

  const handleSelect = (name, type) => {
    onSelect(name, type);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select Luggage</h2>
          <button aria-label='btn5' onClick={onClose} className="text-red-500">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {items.map((category) => (
            <div key={category.category} className="mb-4">
              <h3 className="text-md font-medium text-gray-700 mb-2">{category.category}</h3>
              {category.options && category.options.length > 0 ? (
                category.options.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSelect(item.name, item.type)}
                    className="w-full text-left p-2 mb-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <p className="text-gray-500">No items available.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuggageModal;