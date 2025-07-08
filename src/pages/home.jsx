// images import
import heroimg from '../assets/images/hero.png';
import demo from '../assets/images/demo.jpg';
import { Link } from 'react-router-dom';
import airportdemo from '../assets/images/airportdemo.jpg';
import stationdemo from '../assets/images/stationdemo.jpg';
import React from 'react'; 

const Home = () => {
  const airports = [
  { name: 'Luton', path: '/airports/luton', image: airportdemo },
  { name: 'Heathrow', path: '/airports/heathrow', image: 'heathrow.jpg' },
  { name: 'Gatwick', path: '/airports/gatwick', image: 'gatwick.jpg' },
  { name: 'Stansted', path: '/airports/stansted', image: 'stansted.jpg' },
];

const stations = [
  { name: 'Paddington', path: '/stations/paddington', image: stationdemo },
  { name: 'Euston', path: '/stations/euston', image: stationdemo },
  { name: 'King’s Cross', path: '/stations/kings-cross', image: stationdemo },
  { name: 'Liverpool Street', path: '/stations/liverpool-street', image: stationdemo },
];

  return (
    <div className="space-y-16">

      {/* Hero Section */}

<section className="bg-white text-black py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    {/* Left: Text Content */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Taxi Airport Luton
      </h1>
      <p className="text-lg mb-6">
        Reliable, affordable, and fast airport transfers across London.
      </p>
      <a
        href="/book"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
      >
        Book Now
      </a>
    </div>

    {/* Right: Hero Image with Circle Behind */}
    <div className="relative flex justify-center items-right">
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



      {/* About / Content Section */}
     <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">

  {/* Row 1: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-lg text-gray-700">
        We provide safe, punctual, and professional taxi services to and from Luton Airport.
        With fixed prices, polite drivers, and clean vehicles, your journey starts smoothly.
      </p>
    </div>
    <div>
      <img src={demo}alt="Why Choose Us" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  </div>

  {/* Row 2: Image Left, Text Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div className="order-1 md:order-none">
      <img src={demo} alt="Trusted Drivers" className="w-full h-auto rounded-lg shadow-md" />
    </div>
    <div>
      <h2 className="text-3xl font-bold mb-4">Trusted Drivers</h2>
      <p className="text-lg text-gray-700">
        Our experienced and background-checked drivers ensure a safe and friendly journey. Thousands of customers trust us every year.
      </p>
    </div>
  </div>

  {/* Row 3: Text Left, Image Right */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4">Always On Time</h2>
      <p className="text-lg text-gray-700">
        Our drivers track flights and trains in real-time to avoid delays and ensure you're picked up and dropped off on time.
      </p>
    </div>
    <div>
      <img src={demo} alt="Always On Time" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  </div>

</section>



      {/* Airports Section */}
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

      {/* Train Stations */}
     <section className="py-10 px-4 text-center bg-gray-100">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Major Train Stations</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {stations.map((station) => (
      <Link
        to={station.path}
        key={station.name}
        className="relative h-40 rounded overflow-hidden shadow group"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${station.image})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 group-hover:bg-opacity-30 transition duration-300"></div>

        {/* Text */}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-lg group-hover:text-black">
          {station.name} Station
        </div>
      </Link>
    ))}
  </div>
</section>


      {/* Cab Types */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Cab Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Saloon', 'Estate', 'MPV', '8-Seater'].map((type) => (
              <div key={type} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <img src={`/icons/${type.toLowerCase()}.png`} alt={type} className="h-16 mx-auto mb-2" />
                <p>{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-yellow-500 text-black py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
        <p className="text-lg mb-6">Book, track, and manage your rides on the go.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-black text-white px-6 py-2 rounded-lg">App Store</a>
          <a href="#" className="bg-black text-white px-6 py-2 rounded-lg">Google Play</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
