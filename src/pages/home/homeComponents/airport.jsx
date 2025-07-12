import { Link } from "react-router-dom";
import heathrow from "../../../assets/images/heathrow.webp"
import stansted from "../../../assets/images/stansted.webp"
import gatwick from "../../../assets/images/gatwick.webp"
import londonairport from "../../../assets/images/londonairport.webp"

const Airport = () => {
     const airports = [
        { name: "London", path: "/londonAirport", image: londonairport },
        { name: "Heathrow", path: "/heathrowAirport", image: heathrow },
        { name: "Gatwick", path: "/gatwickAirport", image: gatwick },
        { name: "Stansted", path: "/stanstedAirport", image: stansted },
      ];
    return (
        <>
         <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Airports We Cover</h2>

          <div className="grid grid-cols-2 md:grid-cols-2  text-gray-800">
            {airports.map((airport) => (
              <Link
                to={airport.path}
                key={airport.name}
                className="relative h-96 overflow-hidden shadow group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${airport.image})` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>

                {/* Text */}
                <div className="relative z-10 flex items-center justify-center h-full text-transparent font-bold text-4xl hover:text-white transition-all duration-300">
                  {airport.name} Airport
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        </>
    );
}

export default Airport;