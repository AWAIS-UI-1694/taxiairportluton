import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import Contact from './pages/contactPage/contact'
import Footer from './components/footer'
import London from './pages/areaPages/london'
import EastLondon from './pages/areaPages/eastLondon'
import WestLondon from './pages/areaPages/westLondon'
import NorthLondon from './pages/areaPages/northLondon'
import CentralLondon from './pages/areaPages/centralLondon'
import SouthLondon from './pages/areaPages/southLondon'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          

          {/* Airport Pages */}
          <Route path='/london' element={<London />} />
          <Route path='/eastLondon' element={<EastLondon />} />
          <Route path='/westLondon' element={<WestLondon />} />
          <Route path='/northLondon' element={<NorthLondon />} />
          <Route path='/southLondon' element={<SouthLondon />} />
          <Route path='/centralLondon' element={<CentralLondon />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
