// images import
import { Link } from "react-router-dom";
import airportdemo from "../../assets/images/airportdemo.webp";



import React, { useEffect, useState } from "react";
import Hero from "./homeComponents/hero";
import Airport from "./homeComponents/airport";
import HomeContent from "./homeComponents/homeContent";
import StationsSection from "./homeComponents/stationsSectiono";
import { FaUserFriends } from "react-icons/fa";
import Cab from "./homeComponents/cab";
import Download from "../../utils/download";

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
    {/* download */}
    <Download />
    </div>
  );
};

export default Home;
