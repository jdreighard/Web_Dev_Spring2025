import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from "./components/header";
import Home from './components/hompage';
import About from './components/about';
import Contact from './components/contact';
import Education from './compenetns/education';
import Socials from './components/socials';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
