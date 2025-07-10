import React from "react";
import { Link } from "react-router-dom";

const HeroDynamic = ({ title, description, buttonText = "Book Now", buttonLink = "/bookingForm", backgroundImage, hideButton = false, }) => {
  return (
    <section
      className=" relative w-full bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay (optional: darken background) */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{description}</p>
        {!hideButton && (
          <Link
            to={buttonLink}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroDynamic;
