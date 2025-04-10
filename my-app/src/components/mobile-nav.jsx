import React from 'react';
import { Link } from 'react-router-dom';
function MobileNav() {
  return (
    <nav className="md:hidden bg-[#121111]">
      <div className="w-full m-auto bg-[#17171a] h-12">
        <ul className ="w-full flex flex-row justify-around items-center text-white font-bold h-12">
         <Link to="/">
            HOME
          </Link>
          <Link to="/about">
            ABOUT
          </Link>
          <Link to="/education">
            EDUCATION
          </Link>
          <Link to="/contact">
            CONTACT
          </Link>
          <Link to="/socials">
            SOCIALS
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default MobileNav;