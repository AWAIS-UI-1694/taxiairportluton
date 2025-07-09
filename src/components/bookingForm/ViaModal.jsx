import React, { useState } from 'react';
import axios from 'axios';
import { AsyncPaginate } from 'react-select-async-paginate';
import { FaTimes } from 'react-icons/fa';

const ViaModal = ({ isOpen, onClose, viaFields, setViaFields, validAddresses, maxFields }) => {
  const [tempFields, setTempFields] = useState([...viaFields]);
  const [errors, setErrors] = useState({});

  const loadOptions = async (search, loadedOptions) => {
    try {
      const response = await axios.get('https://booking.taxisnetwork.com/Home/Indextwo', {
        params: { Prefix: search },
      });
      const addresses = response.data.list.map((item) => ({
        value: item.address,
        label: item.address,
      }));
      return {
        options: addresses,
        hasMore: false,
      };
    } catch (error) {
      console.error('Error fetching addresses:', error);
      return { options: [], hasMore: false };
    }
  };

  const handleAddField = () => {
    if (tempFields.length < maxFields) {
      setTempFields([...tempFields, '']);
    }
  };

  const handleRemoveField = (index) => {
    setTempFields((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const handleFieldChange = (index, value) => {
    setTempFields((prev) => {
      const newFields = [...prev];
      newFields[index] = value ? value.value : '';
      return newFields;
    });
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const handleSave = () => {
    const newErrors = {};
    let isValid = true;

    tempFields.forEach((field, index) => {
      if (!field) {
        newErrors[index] = 'This field cannot be empty.';
        isValid = false;
      } else if (!validAddresses.includes(field)) {
        newErrors[index] = 'Invalid value. Please select from the list.';
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setViaFields(tempFields);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleAddField}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              tempFields.length >= maxFields ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={tempFields.length >= maxFields}
          >
            Add Via
          </button>
          <button onClick={onClose} className="text-red-500">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {tempFields.map((field, index) => (
            <div key={index} className="mb-4">
              <AsyncPaginate
                value={field ? { value: field, label: field } : null}
                onChange={(value) => handleFieldChange(index, value)}
                loadOptions={loadOptions}
                placeholder="Enter a Location"
                className="mb-2"
                classNamePrefix="Select"
              />
              {errors[index] && <p className="text-red-500 text-sm">{errors[index]}</p>}
              <button
                onClick={() => handleRemoveField(index)}
                className="text-red-500 mt-1"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViaModal;