import React from 'react';
import { FaTimes } from 'react-icons/fa';

const LuggageModal = ({ isOpen, onClose, onSelect }) => {
  // Expanded luggage items organized by category
  const items = [
    {
      category: 'Luggage',
      options: [
        { name: 'Cabin Bag (Small)', type: 'cabin' },
        { name: 'Check-in Bag (Medium)', type: 'checkin' },
        { name: 'Large Suitcase', type: 'checkin' },
        { name: 'Extra Large Suitcase', type: 'checkin' },
        { name: 'Backpack', type: 'cabin' },
        { name: 'Handbag', type: 'cabin' },
      ],
    },
    {
      category: 'Sports Equipment',
      options: [
        { name: 'Golf Bag', type: 'checkin' },
        { name: 'Ski Equipment', type: 'checkin' },
        { name: 'Snowboard', type: 'checkin' },
        { name: 'Bicycle (Boxed)', type: 'checkin' },
      ],
    },
    {
      category: 'Other Items',
      options: [
        { name: 'Extra Passenger', type: 'passenger' },
        { name: 'Pet Carrier (Small)', type: 'cabin' },
        { name: 'Pet Carrier (Large)', type: 'checkin' },
        { name: 'Musical Instrument (Small)', type: 'cabin' },
        { name: 'Musical Instrument (Large)', type: 'checkin' },
        { name: 'Stroller/Pram', type: 'checkin' },
        { name: 'Wheelchair', type: 'checkin' },
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
          <button onClick={onClose} className="text-red-500">
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