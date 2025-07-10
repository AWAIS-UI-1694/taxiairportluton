// images import
import { Link } from "react-router-dom";
import airportdemo from "../../assets/images/airportdemo.jpg";



import React, { useEffect, useState } from "react";
import Hero from "./homeComponents/hero";
import Airport from "./homeComponents/airport";
import HomeContent from "./homeComponents/homeContent";
import StationsSection from "./homeComponents/stationsSectiono";
import { FaUserFriends } from "react-icons/fa";
import Cab from "./homeComponents/cab";

const Home = () => {



  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* About / Content Section */}
      <HomeContent />

      {/* Airports Section */}
      <Airport />
      {/* Train Stations */}
      <StationsSection />

      {/* Cab Types */}
      <Cab />
      {/* Download App Section */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
        <p className="text-lg mb-6">
          Book, track, and manage your rides on the go.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-black text-white px-6 py-2 rounded-lg">
            App Store
          </a>
          <a href="#" className="bg-black text-white px-6 py-2 rounded-lg">
            Google Play
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
