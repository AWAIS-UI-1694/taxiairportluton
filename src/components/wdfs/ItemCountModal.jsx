import React, { useState } from 'react';

const ItemCountModal = ({ isOpen, onClose, onSave }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Enter Quantity</h2>
          <button onClick={onClose} className="text-red-500">
            <img src="/images/close.png" alt="close" className="w-6 h-6" />
          </button>
        </div>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          onKeyDown={(e) => e.key === '.' && e.preventDefault()}
          className="w-full p-2 border rounded"
        />
        <div className="mt-4">
          <button
            onClick={() => onSave(quantity)}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCountModal;