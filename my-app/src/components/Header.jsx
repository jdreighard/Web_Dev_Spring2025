
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './mobile-nav'; // Import needed for mobile hamburger menu

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // variables for mobile menu 
  const [showHeader, setShowHeader] = useState(true);

  // for menu to disappear once user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {  // hide header at 81 or more
        setShowHeader(false);
      } 
      else {
          setShowHeader(true); // show at 80 or less for 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

// so if user leaves mobile drop down open, then changes screen size, the variable resets itself to false
// main reason is for dynamically changing margins based on the users nav bar type
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // if window goes past 767 pixels, set variable to false
        setMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // empty dependency array


  return (
    <div>
      {showHeader &&(
      <header className="fixed top-0 w-full h-20 bg-[#121111]"> 
        {/*Main header row*/}
        <div className="w-full max-w-screen-xl m-auto flex items-center justify-between p-3 md:px-12 h-auto mt-8">
          <img src ="/header_img.svg" alt ="Tech Image" width = "50px" height="50px"/>
          {/* Desktop nav bar section */}
          <nav className="w-full hidden md:flex">
              <ul className="w-full flex flex-row justify-around items-center font-bold md:text-lg lg:text-xl p-5">
                <li>
                  <Link to="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link to="/education">
                    EDUCATION
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link to="/socials">
                    SOCIALS
                  </Link>
                </li>
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
          <Link to="/login">
            <button className=" hidden md:block bg-[#093BB0] text-white py-2 px-6 rounded-full hover:bg-[#189fd6] focus:outline-none focus:ring-2">Login</button>
          </Link>
          
          {/*Show the picture for the button on mobile*/}
          <button className="md:hidden">
          <img src="/login.svg" alt="Login" className="w-[50px] h-[50px]" />
          </button>
        </div>
        {mobileNavOpen &&
         <MobileNav />}
      </header>
    )}
       {/*if mobileNavOpen is true, add a empty div with margin to dynamically push whatever content is below it */}
      {mobileNavOpen && <div className="mb-48"></div>}
  </div>
    
  )
}
export default Header;
