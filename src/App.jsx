import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
