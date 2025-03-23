import React from 'react';


function Header() {
  const [mobileNavOpen, setMobileNaveOpen] = useState(false); // variables for 
  return (
    <header className="fixed top-0 w-full flex flex-row h-40 bg-#121111">
      <div className="w-full max-w-screen-xl m-auto flex items-center">
        <img src ="/header_img.svg" alt ="Tech Image" width = "75px" height="75px" className="ml-10"></img>
        <nav className="w-full hidden md:flex">  
          <ul className ="w-full flex flex-row justify-around items-center text-white"> 
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>TEST</li>
          </ul>
        </nav>
        <button className="bg-[#489C24] text-white py-2 px-6 rounded-full hover:bg-[#3f7b1e] focus:outline-none focus:ring-2 focus:ring-green-300">Login</button>
      </div>
    </header>
  )
}
export default Header;
