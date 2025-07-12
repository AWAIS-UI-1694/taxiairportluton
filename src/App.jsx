import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./App.css";

// Components
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer";

// Area Pages
import London from "./pages/areaPages/london";
import EastLondon from "./pages/areaPages/eastLondon";
import WestLondon from "./pages/areaPages/westLondon";
import NorthLondon from "./pages/areaPages/northLondon";
import CentralLondon from "./pages/areaPages/centralLondon";
import SouthLondon from "./pages/areaPages/southLondon";

// Airport Pages
import LondonAirport from "./pages/airportPages/londonAirport";
import GatwickAirport from "./pages/airportPages/gatwickAirport";
import StanstedAirport from "./pages/airportPages/stanstedAirport";
import HeathrowAirport from "./pages/airportPages/heathrowAirport";

// Stations Pages
import CharingCrossStation from "./pages/stationPages/charingCrossStation.jsx";
import LondonBridgeStation from "./pages/stationPages/londonBridgeStation.jsx";
import WaterlooStation from "./pages/stationPages/waterlooStation.jsx";
import VictoriaStation from "./pages/stationPages/victoriaStation.jsx";
import PaddingtonStation from "./pages/stationPages/paddingtonStation.jsx";
import KingsCrossStation from "./pages/stationPages/kingsCrossStation.jsx";
import EustonStation from "./pages/stationPages/eustonStation.jsx";

// Services Pages
import PetServices from "./pages/services/petServices.jsx";
import HotelServices from "./pages/services/hotelServices.jsx";

// Other Pages
import Contact from "./pages/contactPage/contact";
import About from "./pages/aboutPage/about";

// Booking Form
import BookingForm from "./components/bookme/bookingForm";


// Utils
import GoToTopButton from "./utils/goToTop.jsx";
import NotFound from "./utils/404.jsx";


function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Booking Form */}
            <Route path="/bookingForm" element={<BookingForm />} />

            {/* Area Pages */}
            <Route path="/london" element={<London />} />
            <Route path="/eastLondon" element={<EastLondon />} />
            <Route path="/westLondon" element={<WestLondon />} />
            <Route path="/northLondon" element={<NorthLondon />} />
            <Route path="/southLondon" element={<SouthLondon />} />
            <Route path="/centralLondon" element={<CentralLondon />} />

            {/* Airport Pages */}
            <Route path="/londonAirport" element={<LondonAirport />} />
            <Route path="/gatwickAirport" element={<GatwickAirport />} />
            <Route path="/stanstedAirport" element={<StanstedAirport />} />
            <Route path="/heathrowAirport" element={<HeathrowAirport />} />

            {/* Stations Pages */}
            <Route path="/charingCrossStation" element={<CharingCrossStation />} />
            <Route path="/londonBridgeStation" element={<LondonBridgeStation />} />
            <Route path="/waterlooStation" element={<WaterlooStation />} />
            <Route path="/victoriaStation" element={<VictoriaStation />} />
            <Route path="/paddingtonStation" element={<PaddingtonStation />} />
            <Route path="/kingsCrossStation" element={<KingsCrossStation />} />
            <Route path="/eustonStation" element={<EustonStation />} />

            {/* Services */}
            <Route path="/petServices" element={<PetServices />} />
            <Route path="/hotelServices" element={<HotelServices />} />

            {/* Other Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* 404 not found page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <GoToTopButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
