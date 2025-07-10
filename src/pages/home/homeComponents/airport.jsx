import { Link } from "react-router-dom";
import airportdemo from "../../../assets/images/airportdemo.jpg";


const Airport = () => {
     const airports = [
        { name: "London", path: "/londonAirport", image: airportdemo },
        { name: "Heathrow", path: "/heathrowAirport", image: "heathrow.jpg" },
        { name: "Gatwick", path: "/gatwickAirport", image: "gatwick.jpg" },
        { name: "Stansted", path: "/stanstedAirport", image: "stansted.jpg" },
      ];
    return (
        <>
         <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Airports We Cover</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
            {airports.map((airport) => (
              <Link
                to={airport.path}
                key={airport.name}
                className="relative h-40 rounded overflow-hidden shadow group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${airportdemo})` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>

                {/* Text */}
                <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-lg group-hover:text-black">
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