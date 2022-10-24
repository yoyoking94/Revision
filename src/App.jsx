import React from 'react'
import Home from './src/pages/Home/home'
import Contact from './src/pages/Contact/contact'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
