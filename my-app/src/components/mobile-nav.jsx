import React from 'react';
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
          <Link to="/contact">
            CONTACT
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default MobileNav;