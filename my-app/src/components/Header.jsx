
import React, { useState } from 'react';
import MobileNav from './MobileNav'; // Import needed for mobile hamburger menu

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // variables for mobile menu 
  return (
    <header className="fixed top-0 w-full h-20 bg-[#121111]">
      {/*Main header row*/}
      <div className="w-full max-w-screen-xl m-auto flex items-center justify-between p-3 h-auto mt-2rem">
        <img src ="/header_img.svg" alt ="Tech Image" width = "50px" height="50px"/>
        {/* Desktop nav bar section */}
        <nav className="w-full hidden md:flex">  
          <ul className ="w-full flex flex-row justify-around items-center text-white"> 
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>TEST</li>
          </ul>
        </nav>
        {/* Mobile nav bar section*/}
        <div className="flex justify-center content-center m-auto">
          <button 
            onClick ={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden justify-center">
            <img src="/hamburger.svg" alt="navigation menu" width="40px" height="40px"/>
          </button> 
        </div>
        
        {/*Show this button on medium screens and above*/}
        <button className=" hidden md:block bg-[#489C24] text-white py-2 px-6 rounded-full hover:bg-[#3f7b1e] focus:outline-none focus:ring-2 focus:ring-green-300">Login</button>
        {/*Show the picture for the button on mobile*/}
        <button className="md:hidden">
        <img src="/login.svg" alt="Login" className="w-50px h-50px" />
        </button>
      </div>
      {mobileNavOpen && <MobileNav />}
    </header>
  )
}
export default Header;
