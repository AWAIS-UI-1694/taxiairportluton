import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import Contact from './pages/contactPage/contact'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
