import React from 'react';
function MobileNav() {
  return (
    <nav className="md:hidden bg-[#121111]">
      <div className="w-full m-auto bg-[#17171a] h-12">
        <ul className ="w-full flex flex-row justify-around items-center text-white h-12">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>TEST</li>
        </ul>
      </div>
    </nav>
  )
}
export default MobileNav;