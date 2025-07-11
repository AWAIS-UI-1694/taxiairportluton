import mpv from "../../../assets/images/mpv.webp";
import saloon from "../../../assets/images/saloon.webp";
import estate from "../../../assets/images/estate.webp";
import exacutive from "../../../assets/images/exacutive.webp";
import { useState } from "react";
import { FaBriefcase, FaSuitcaseRolling, FaUserFriends } from "react-icons/fa";

const Cab = () => {
      const cabTypes = [
    {
      name: 'Saloon',
      image: saloon,
      passengers: 4,
      luggage: 2,
      briefcases: 2,
    },
    {
      name: 'Estate',
      image: estate,
      passengers: 4,
      luggage: 3,
      briefcases: 2,
    },
    {
      name: 'MPV',
      image: mpv,
      passengers: 5,
      luggage: 4,
      briefcases: 4,
    },
    {
      name: 'Exacutive',
      image: exacutive,
      passengers: 3,
      luggage: 2,
      briefcases: 2,
    },
  ];

  const [active, setActive] = useState('Saloon');

  const selected = cabTypes.find((cab) => cab.name === active);

    return (
        <>
<section className="bg-white py-3 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-16">Cab Types</h2>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center md:gap-4 gap-2 mb-8">
            {cabTypes.map((cab) => (
              <button
                key={cab.name}
                onClick={() => setActive(cab.name)}
                className={`px-2 md:px-4 py-2 text-sm md:text-lg rounded-lg border-0 after:border-0  transition ${active === cab.name
                    ? 'bg-yellow-500 text-black font-semibold'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
              >
                {cab.name}
              </button>
            ))}
          </div>

          {/* Cab Details */}
          <div className="flex flex-col md:flex-row h-86 md:min-h-72 items-center justify-center gap-8">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-w-sm h-auto object-contain"
            />

            <div className="text-left max-w-md">
              <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaUserFriends className="text-yellow-500" />
                  Passengers: {selected.passengers}
                </li>
                <li className="flex items-center gap-2">
                  <FaSuitcaseRolling className="text-yellow-500" />
                  Luggage: {selected.luggage}
                </li>
                <li className="flex items-center gap-2">
                  <FaBriefcase className="text-yellow-500" />
                  Briefcases: {selected.briefcases}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </>
    );

}

export default Cab;

