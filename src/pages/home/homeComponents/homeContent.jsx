import demo from "../../../assets/images/demo.jpg";


const HomeContent = () => {
    return (
        <>
           <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-700">
              We provide safe, punctual, and professional taxi services to and
              from Luton Airport. With fixed prices, polite drivers, and clean
              vehicles, your journey starts smoothly.
            </p>
          </div>
          <div>
            <img
              src={demo}
              alt="Why Choose Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1 md:order-none">
            <img
              src={demo}
              alt="Trusted Drivers"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Trusted Drivers</h2>
            <p className="text-lg text-gray-700">
              Our experienced and background-checked drivers ensure a safe and
              friendly journey. Thousands of customers trust us every year.
            </p>
          </div>
        </div>

        {/* Row 3: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Always On Time</h2>
            <p className="text-lg text-gray-700">
              Our drivers track flights and trains in real-time to avoid delays
              and ensure you're picked up and dropped off on time.
            </p>
          </div>
          <div>
            <img
              src={demo}
              alt="Always On Time"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
        </>
    )
}
export default HomeContent;