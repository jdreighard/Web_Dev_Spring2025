import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from "./components/header";
import Home from './components/hompage';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Socials from './components/socials';
import Footer from './components/footer';
import FishGallery from './components/fish-gallery';
import HuntingGallery from './components/hunting-gallery';
import Login from './components/login';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow pt-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/fishing-gallery" element={<FishGallery />} />
            <Route path="/hunting-gallery" element={<HuntingGallery />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
