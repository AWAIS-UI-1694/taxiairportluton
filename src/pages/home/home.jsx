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
import { Helmet } from "react-helmet-async";

const Home = () => {



  return (
    <>
    <Helmet>
        <title>Taxi Airport Luton—Airport Taxi Luton—Luton Airport Transfer</title>
        <meta name="description" content="Taxi Airport Luton offers 24/7 taxi services to and from Luton Airport, offers a meet-and-greet service at arrivals, and offers flight monitoring." />
        <meta name="keywords" content="Taxi Airport Luton, Luton Taxi, Luton Cab, Luton Minicab, Luton Airport Transfers, Luton Airport Taxi, Luton Taxi Numbers, Luton Station Taxi, Taxi Near Me in Luton, Luton Airport Taxi Service, Airport Taxi Luton, Luton Taxi Firms, Book Taxi To Luton Airport" />
        <link rel="canonical" href="https://www.taxiairportluton.com/about" />
      </Helmet>
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
    </>
  );
};

export default Home;
