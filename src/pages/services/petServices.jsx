import HeroDynamic from "../../components/herodynamic";
import petHero from "../../assets/images/pethero.jpg";
import { Helmet } from "react-helmet-async";
import pet2 from "../../assets/images/pet2.jpg";
import pet3 from "../../assets/images/pet3.jpg";

const PetServices = () => {
  return (
    <>
      <Helmet>
        <title>
          Taxi Airport Luton for Pets—Pet-Friendly Cabs for Vet Visits
        </title>
        <meta
          name="description"
          content="Pet-friendly taxi service in Luton for safe, stress-free travel to airports, vets, and more. Compassionate drivers and comfortable rides for your furry friends."
        />
        <link
          rel="canonical"
          href="https://taxiairportluton.com/petServices"
        />
      </Helmet>
      {/* hero dynamic start */}
      <HeroDynamic
        title="Taxi Airport Luton for Pets"
        description="Taxi Airport Luton for pets is a safe and reliable ride for your beloved pets. Are you looking for a taxi in Luton that is safe and friendly to pets?"
        buttonText="Book Now"
        buttonLink="/bookingForm"
        backgroundImage={petHero}
        imageAlt="pet taxi hero img"
      />
      {/* hero dynamic end */}
      <section className="bg-white py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        {/* Section 1 */}
        <div className="md:flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">
              Taxi Airport Luton for Pets
            </h2>
            <p className="text-md text-gray-700">
             Taxi Airport Luton for pets is a safe and reliable ride for your beloved pets. Are you looking for a taxi in Luton that is safe and friendly to pets? Taxi Airport Luton is the best place to go if you want to transport your pet safely, comfortably, and without stress to and from any part of London. Our drivers make sure that your beloved furry friends are treated with care and compassion every step of the way, whether it's a trip to the vet, the groomer, or any other pet-related event.
              <br />
              <br />
              We know that pets are part of the family, so we offer a transportation service that puts their safety and comfort first. Our pet-friendly minicabs don't have any crates or other things that could cause confusion; they just have a calm ride.
            </p>
            <h2 className="text-3xl font-semibold mb-4">
              Pet Taxi Services in Luton
            </h2>
            <p className="text-md text-gray-700">
             Our pet taxi services at Taxi Airport Luton are meant to make travel easy for both pets and their owners. If you're going to:
            </p>
                <ul className="text-gray-700 text-md list-disc pl-5">
                    <li>A visit to the vet</li>
                    <li>A salon for grooming pets</li>
                    <li>A place to board pets</li>
                    <li>Or just a relaxing trip</li>
                    </ul>
              <br />
            <p className="text-md text-gray-700">
                Our skilled drivers will make sure the trip goes smoothly, calmly, and on time. We take care of dogs, cats, and small animals, and we're happy to talk about any special needs your pet may have.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={pet2}
              alt="Why Choose Us" 
              className="hidden  md:block max-h-svh rounded-lg max-max-h-screen shadow-md w-full"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className=" items-center">
          <div className="w-full ">
            <h2 className="text-3xl font-semibold mb-4">Minicabs for Pets</h2>
            <p className="text-md text-gray-700">
            We have a fleet of vehicles that are clean, safe, and comfortable for your pets. We offer:
            </p>
            <ul>
                <li>Lots of room for seating or pet crates (if needed)</li>
                <li>Drivers who are calm, experienced, and know how to handle animals</li>
                <li>Prices that are set and don't have any hidden fees</li>
                <li>Our booking calculator gives you real-time fare estimates.</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="items-center">
          <div className="w-full ">
            <h2 className="text-3xl font-semibold mb-4">
              Pet Cabs for Vet Appointments
            </h2>
            <p className="text-md text-gray-700">
             Need a dependable way to get to the vet? We know that going to the vet, especially in an emergency, can be hard on both you and your pet. That's why we offer quick and dependable rides to animal hospitals and vet clinics all over London and the surrounding areas. Our drivers know how to take care of pets and keep the environment calm during the trip.
              <br />
              <br />
              Whether it's a routine check-up or an urgent visit, your pet is in safe hands.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={pet3}
              alt="Comfortable Vehicles"
              className="hidden max-h-svh md:block rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <h2 className="text-3xl font-semibold mb-4">
              Why Choose Taxi Airport Luton for Pet Travel?
            </h2>
            <ul className="text-gray-700 text-md list-disc pl-5">
              <li>Cars that are safe and comfortable for pets</li>
              <li>Drivers who love animals and are trained</li>
              <li>Quick service for grooming and vet appointments</li>
              <li>Prices that don't change and rates that are reasonable</li>
              <li>Available in Luton and the rest of Greater London</li>
              <li>Easy to book ahead of time online or by phone</li>
            </ul>
            <p className="text-md text-gray-700 mt-4">
                We make sure that your pet has as much fun on their trip as you do!
            </p>
            <br />
            <h2 className="text-3xl font-semibold mb-4">
             Where We Take Your Pets
            </h2>
            <p className="text-md text-gray-700">
              Our pet taxis are available for travel to:
            </p>
            <ul className="text-gray-700 text-md list-disc pl-5">
              <li>Veterinary clinics</li>
              <li>Animal hospitals</li>
              <li>Grooming salons</li>
              <li>Daycare centres</li>
              <li>Pet-friendly events</li>
              <li>Airports or train stations (if travelling with your pet)</li>
            </ul>
            <br />
            <p className="text-md text-gray-700">
              Let us know your pet’s needs and destination—we’ll handle the rest.
            </p>
          </div>
        </div>

        <div className=" items-center gap-8">
          <div className="w-full ">
             <h2 className="text-3xl font-semibold mb-4">
              Book Your Pet-Friendly Cab in Luton Today
            </h2>
            <p className="text-md text-gray-700">
             It's easy and quick to book a Luton pet taxi with Taxi Airport Luton. We're here to help, whether your pet needs to see the vet regularly, go across town, or get special care transportation.
            </p>
            <ul className="text-gray-700 text-md list-disc pl-5">
              <li>Make bookings online in minutes.</li>
              <li>Get a quote right away.</li>
              <li>Get help with special needs.</li>
            </ul>
            <br />
            <p className="text-md text-gray-700">
             Don't put it off until the last minute. Plan ahead so that your pet has a comfortable and stress-free trip. Call us today to make sure your pet travels in style, comfort, and safety.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PetServices;
