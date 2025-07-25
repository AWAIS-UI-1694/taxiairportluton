import { Link } from "react-router-dom";
import heroimg from "../../../assets/images/hero.webp";
import React from "react";

const Hero = () => {
    return (
        <>
         <section className="bg-white h-svh text-black py-auto justify-center content-center px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left: Text Content */}
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      Taxi Airport Luton
                    </h1>
                    <p className="text-lg mb-6">
                      Reliable, affordable, and fast airport transfers across London.
                    </p>
                    <Link
                      to="/bookingForm"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
                    >
                      Book Now
                    </Link>
                  </div>
        
                  {/* Right: Hero Image with Circle Behind */}
                  <div className=" flex justify-center items-right">
                    {/* Background Circle */}
                    {/* <div className="absolute bg-yellow-100 rounded-full  w-full md:h-72 my-auto z-0"></div> */}
        
                    {/* Foreground Image */}
                    <img
                      src={heroimg}
                      alt="Taxi Airport Luton"
                      className="relative z-10 h-72 md:h-96 object-contain"
                    />
                  </div>
                </div>
              </section>
        </>
        );
}

export default Hero;   