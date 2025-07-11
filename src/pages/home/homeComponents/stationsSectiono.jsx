import stationdemo from "../../../assets/images/stationdemo.webp";
import airportdemo from "../../../assets/images/airportdemo.webp";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const StationsSection = () => {
      const stationData = [
    {
      id: 1,
      name: "Paddington",
      slug: "paddington",
      path: "/stations/paddington",
      description: "Connects to Heathrow Express and West London.",
      image: stationdemo,
    },
    {
      id: 2,
      name: "Euston",
      slug: "euston",
      path: "/stations/euston",
      description: "Main hub for West Midlands and Northern cities.",
      image: airportdemo,
    },
    {
      id: 3,
      name: "King’s Cross",
      slug: "kings-cross",
      path: "/stations/kings-cross",
      description: "Known for Harry Potter & links to Scotland.",
      image: stationdemo,
    },
    {
      id: 4,
      name: "Liverpool Street",
      slug: "liverpool-street",
      path: "/stations/liverpool-street",
      description: "East London hub with Stansted Express.",
      image: airportdemo,
    },
    {
      id: 5,
      name: "Victoria",
      slug: "victoria",
      path: "/stations/victoria",
      description: "Busy terminal with Gatwick Express.",
      image: stationdemo,
    },
    {
      id: 6,
      name: "Waterloo",
      slug: "waterloo",
      path: "/stations/waterloo",
      description: "Largest station in London, connects to the south.",
      image: airportdemo,
    },
    {
      id: 7,
      name: "Charing Cross",
      slug: "charing-cross",
      path: "/stations/charing-cross",
      description: "Historic station near Trafalgar Square.",
      image: stationdemo,
    },
  ];

  const cardsPerView = 3;
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = stationData.length;
  const cardWidth = 384; // Tailwind w-96
  const gap = 24;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + cardsPerView >= totalCards ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + cardsPerView < totalCards) {
      setStartIndex(startIndex + 1);
    }
  };
  return (
    <>
      <section className="py-10 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Major Train Stations
        </h2>

        <div className="relative w-full max-w-7xl mx-auto py-12 px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
              }}
            >
              {stationData.map((station) => (
                <div
                  key={station.id}
                  className="w-96 mr-6 bg-white rounded-lg shadow-md flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={station.image}
                    alt={station.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 items-left justify-left content-start ">
                    <h3 className="text-xl text-left font-semibold text-gray-800 mb-2">
                      {station.name} Station
                    </h3>
                    <p className="text-gray-600 text-left text-sm mb-4">
                      {station.description}
                    </p>
                    <Link
                      to={station.path}
                      className="flex text-left w-full content-left justify-left item-center hover:text-black hover:ml-2 text-yellow-400 font-semibold px-4 py-2 rounded transition duration-300"
                    >
                      Visit Page <ArrowRightIcon className="w-4 h-4 my-auto" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-yellow-300 disabled:opacity-30 z-10"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + cardsPerView >= totalCards}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow hover:bg-yellow-300 disabled:opacity-30 z-10"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

export default StationsSection;