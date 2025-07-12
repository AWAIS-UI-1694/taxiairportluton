import demo from "../../../assets/images/demo.webp";
import home1 from "../../../assets/images/home1.webp"
import home2 from "../../../assets/images/home2.webp"
const HomeContent = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Taxi Airport Luton</h2>
            <p className="text-lg text-gray-700">
              Taxi Airport Luton is a reliable taxi service that takes you to
              and from Luton Airport. We offer a lot of different ways to get a
              taxi from Luton Airport, including long trips to London and other
              places. Our Luton airport transfer services are designed to meet
              your travel needs, whether you're going on a vacation or a
              business trip.
              <br />
              <br />
              Our Luton taxi service is available 24 hours a day, seven days a
              week. Need a cheap ride to Luton Airport? Our airport taxi Luton
              team offers a reliable, timely, and inexpensive ride, making us
              the best choice for both business and leisure travellers.
              <br />
              <br />
               Taxi Airport Luton makes it easy and stress-free to book a cheap
              Luton taxi or the cheapest Luton taxi service near me. We can help
              you with any transfer, whether it's a local drop-off or a Luton
              Airport taxi service.
              <br />
              <br />
              Want to book a taxi to Luton Airport ahead of time? With our Luton
              Taxi Number, it's simple to do that and make sure everything goes
              smoothly and comfortably. We can give you the best price and the
              most accurate quote for a taxi to Luton Airport. With our
              transparent pricing for Luton airport taxis and professional
              service, you'll never have any surprises. You'll always have
              smooth, cheap travel.
            </p>
          </div>
          <div>
            <img
              src={home1}
              alt="Why Choose Us"
              className="hidden md:block w-full max-h-svh rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-10 items-center">
          <div className="order-1 md:order-none">
            <img
              src={home2}
              alt="Trusted Drivers"
              className="hidden md:block w-full max-h-svh rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Taxis Luton Airport</h2>
            <p className="text-lg text-gray-700">
              Taxis Luton Airport provides reliable transportation to and from
              the airport, whether you need a taxi to national train stations or
              UK ports. We have a simple and quick way for you to book a taxi to
              Luton Airport that works with your schedule. You can count on us
              to make your trip to Luton Airport easy and stress-free, whether
              you want to book a taxi in advance or get a quote for a taxi right
              away.
                <br />
              <br />
            Our experienced drivers are ready to give you great service with
              clear, set prices if you're looking for cheap Luton taxi numbers
              or a reliable Luton taxi service. We can help you get to a hotel
              nearby or take a day trip to a tourist spot.
              <br /><br />
               Our taxi service in Luton is a safe and easy way to get to and
              from Luton and other places. It's easy to plan your trip with our
              simple online booking system. Taxi Airport Luton accepts all major
              credit cards, so making travel plans with us is easy and smooth.
            </p>
            <br />
             <h2 className="text-3xl font-bold mb-4">
              Why Choose Taxi Airport Luton?
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Taxi Airport Luton – Travel to and from Luton with ease.</li>
              <li>
                Easy Online Booking – Secure your ride using our user-friendly
                system.
              </li>
              <li>
                Multiple Payment Options – All major credit/debit cards
                accepted.
              </li>
            </ul>
          </div>
        </div>
       
        {/* Row 3: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-10 items-center">
          <div>
           
            <h2 className="text-3xl font-bold mb-4">Cabs Airport Luton</h2>
            <p className="text-lg text-gray-700">
              Cabs Luton Airport has lower rates since we are the ideal option
              to Black Cabs in London for Luton Airport Transfer. We also
              provide corporate account service to businesses and government
              agencies in London. We only charge you once a week for our cab
              service, and you don't have to carry cash with you all week. Cabs
              from Luton Airport to London This is for people who want private
              accounts for their daily trips or commutes. Prices for cabs to
              Luton Airport are low, but they are still affordable for everyone.
            </p>
            <br />
             <h2 className="text-3xl font-bold mb-4">Minicab Luton Airport</h2>
            <p>
              Minicab Luton Airport Prices has cheaper ways to get to and from
              the airport. Based on the size of the car, our fare calculator can
              tell you how much a minicab will cost. After that, pick a car
              based on how much stuff you can fit in it.
            </p>
            <h2 className="text-3xl font-bold mb-4">Luton Airport Cars</h2>
            <p className="text-lg text-gray-700">
              There are a lot of different kinds of cars at Luton Airport Cars
              in London that can hold your bags. Taxi Airport Luton has a wide
              range of vehicles, including saloon cars, executive cars, estate
              cars, minibuses, and coaches. This means that everyone will have
              enough room to sit comfortably on trips to the airport or other
              long trips from Luton.
            </p>
          </div>
          <div>
            <img
              src={home1}
              alt="Always On Time"
              className="hidden md:block w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
   
        <div className="items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Taxis Airport Luton</h2>
            <p className="text-lg text-gray-700">
              Taxis at Luton Airport offer bigger cars: take a group that is
              bigger than what a taxi can hold? When you need to take a group to
              or from Luton Airport, book our Luton Airport minibus. Our
              minibuses each have eight seats, so we can take big groups of up
              to sixteen people and their luggage.
            </p>
          </div>
         
        </div>
      </section>
    </>
  );
};
export default HomeContent;
