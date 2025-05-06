import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav() {
  return (
    <nav className="md:hidden bg-[#121111]">
      <div className="w-full m-auto bg-[#17171a] relative">
        <ul className="w-full flex flex-col text-white font-bold gap-4 p-3">
          <li className="ml-0">
            <Link to="/" className="hover:animate-bounce p-3">HOME</Link>
          </li>
          <li className="ml-8">
            <Link to="/about" className="hover:animate-bounce p-3">ABOUT</Link>
          </li>
          <li className="ml-16">
            <Link to="/education" className="hover:animate-bounce p-3">EDUCATION</Link>
          </li>
          <li className="ml-8">
            <Link to="/contact" className="hover:animate-bounce p-3">CONTACT</Link>
          </li>
          <li className="ml-0">
            <Link to="/socials" className="hover:animate-bounce p-3">SOCIALS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
