import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer";

// Area Pages Link
import London from "./pages/areaPages/london";
import EastLondon from "./pages/areaPages/eastLondon";
import WestLondon from "./pages/areaPages/westLondon";
import NorthLondon from "./pages/areaPages/northLondon";
import CentralLondon from "./pages/areaPages/centralLondon";
import SouthLondon from "./pages/areaPages/southLondon";
// Airports Pages Link
import LondonAirport from "./pages/airportPages/londonAirport";
import GatwickAirport from "./pages/airportPages/gatwickAirport";
import StanstedAirport from "./pages/airportPages/stanstedAirport";
import HeathrowAirport from "./pages/airportPages/heathrowAirport";

// About and Contact Pages
import Contact from "./pages/contactPage/contact";
import About from "./pages/aboutPage/about";
import BookingForm from "./components/bookme/bookingForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Booking Form */}
            <Route path="/bookingForm" element={<BookingForm />} />

            {/* Areas Pages */}
            <Route path="/london" element={<London />} />
            <Route path="/eastLondon" element={<EastLondon />} />
            <Route path="/westLondon" element={<WestLondon />} />
            <Route path="/northLondon" element={<NorthLondon />} />
            <Route path="/southLondon" element={<SouthLondon />} />
            <Route path="/centralLondon" element={<CentralLondon />} />

            {/* Airports Pages */}
            <Route path="/londonAirport" element={<LondonAirport />} />
            <Route path="/gatwickAirport" element={<GatwickAirport />} />
            <Route path="/stanstedAirport" element={<StanstedAirport />} />
            <Route path="/heathrowAirport" element={<HeathrowAirport />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
