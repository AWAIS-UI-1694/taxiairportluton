// images import
import heroimg from '../assets/images/hero.png';
import React from 'react';

const Home = () => {
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
      <section className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-700">
          We provide safe, punctual, and professional taxi services to and from Luton Airport.
          With fixed prices, polite drivers, and clean vehicles, your journey starts smoothly.
        </p>
      </section>

      {/* Airports Section */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Airports We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
            {['Luton', 'Heathrow', 'Gatwick', 'Stansted'].map((airport) => (
              <div key={airport} className="bg-white shadow rounded p-4">{airport} Airport</div>
            ))}
          </div>
        </div>
      </section>

      {/* Train Stations */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Major Train Stations</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-800">
          {['Paddington', 'Euston', 'King’s Cross', 'Liverpool Street'].map((station) => (
            <div key={station} className="bg-gray-200 px-6 py-3 rounded">{station} Station</div>
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
