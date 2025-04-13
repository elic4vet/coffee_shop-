import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/nav2';
import About from './components/pages/about/about';
import Services from './components/pages/services/service';
import Pricing from './components/pages/pricing/pricing';
import Contact from './components/pages/contact/contact';
import Home from './components/pages/home/home';  
import './App.css'

function App() {


  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
