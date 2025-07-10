import React, { useState, useEffect } from "react";

const AutocompleteInput = ({ id, label, placeholder, onChange }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length < 2) return;

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(`https://booking.londontaxi247.co.uk/Home/Indextwo?Prefix=${input}`);
        const data = await res.json();
        if (data?.list) {
          setSuggestions(data.list.map((item) => item.address));
        }
      } catch (error) {
        console.error("Autocomplete error:", error);
      }
    };

    fetchSuggestions();
  }, [input]);

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-semibold">{label}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="border px-3 py-2 w-full"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          onChange(e.target.value);
        }}
        list={`${id}-suggestions`}
      />
      <datalist id={`${id}-suggestions`}>
        {suggestions.map((s, i) => (
          <option key={i} value={s} />
        ))}
      </datalist>
    </div>
  );
};

export default AutocompleteInput;
