import React from 'react'
function Footer() {
  return(
    <footer className="w-full h-20 border-t-2 border-[#093BB0] mt-28">
      <div className="flex flex-col md:flex-row w-full md:space-x-4 max-w-screen-xl m-auto p-4">
        <div className="w-[100%] md:w-[50%] mx-auto flex flex-col justify-center items-center px-4 py-4">
          <h3 className="mb-4 font-extrabold">Copyright</h3>
          <p>Property of J.D. Reighard 2025</p>
        </div>
        <div className="w-[100%] md:w-[50%] mx-auto flex flex-col justify-center items-center px-4 py-4">
          <h3 className="mb-4 font-extrabold">Contact</h3>
          <p>Phone: 406-439-8386</p>
          <p>Adress: You dont need that, creep</p>
          <p>Email: jreighard9226@gmail.com</p>
        </div>
      </div>        
  </footer>

  )
}
export default Footer