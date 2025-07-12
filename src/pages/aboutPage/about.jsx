import contacthero from "../../assets/images/contact.webp";
import HeroDynamic from "../../components/herodynamic";
import Download from "../../utils/download";
import aboutimg from "../../assets/images/about.webp";

const About = () => {
  return (
    <>
      {/* hero dynamic start */}
      <HeroDynamic
        title="About Us - Taxi Airport Luton"
        description="Dedicated to providing comfortable, safe, and affordable transport solutions. Learn more about our services and commitment to excellence."
        backgroundImage={contacthero}
        hideButton={true}
        imageAlt="about hero img"
      />
      {/* hero dynamic end */}

      <section className="bg-white text-gray-800 py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Taxi Airport Luton</h2>
          <p className="text-lg text-gray-600">
            Dedicated to providing comfortable, safe, and affordable transport
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              We are a leading taxi service based near Luton Airport,
              specializing in airport transfers, city rides, and long-distance
              journeys. Our mission is to make your travel smooth, punctual, and
              stress-free.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Promise</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>24/7 service availability</li>
              <li>Professional, friendly drivers</li>
              <li>Instant online booking and quotes</li>
              <li>Affordable and transparent pricing</li>
              <li>Modern and clean vehicles</li>
            </ul>
          </div>

          <div>
            <img
              src={aboutimg}
              alt="Taxi Airport Luton"
              className="hidden  md:block max-h-svh rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
      {/* download */}
      <Download />
    </>
  );
};

export default About;
