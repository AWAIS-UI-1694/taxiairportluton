import React, { useState } from 'react';

const WaitTimeModal = ({ isOpen, onClose, onSave }) => {
  const [waitTime, setWaitTime] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Waiting Time</h2>
          <button aria-label='btn7' onClick={onClose} className="text-red-500">
            <img src="/images/close.webp" alt="close" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Waiting Time:</label>
          <input
            type="number"
            min="1"
            max="60"
            value={waitTime}
            onChange={(e) => setWaitTime(e.target.value)}
            className="p-2 border rounded"
          />
          <span className="ml-2">minutes</span>
        </div>
        <div className="mt-4">
          <button
            onClick={() => onSave(waitTime)}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitTimeModal;