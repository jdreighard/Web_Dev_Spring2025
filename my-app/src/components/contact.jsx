import React from 'react'
function Contact() {
  return(
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col w-11/12 mx-auto bg-[#17171A] py-10 picture-shadow rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Me!</h1>
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6">
          <h2 className="text-xl font-bold border-b-2 border-[#093BB0] w-fit">Virtually</h2>
          </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="mb-2 text-lg font-semibold">Emails</h3>
          <p className="mb-1">Work: jd@temptesttech.com</p>
          <p className="mb-1">School: jreighard@carroll.edu</p>
          <p>Personal: jreighard9226@gmail.com</p>
        </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
          <p className="mb-1">Personal: 406-439-8386</p>
          <p>Trap Phone: 406- *** - **** (You might be a fed)</p>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6">
          <h2 className="text-xl font-bold border-b-2 border-[#093BB0] w-fit">In person</h2>
        </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="mb-2 text-lg font-semibold">Where I be</h3>
          <p className="mb-1">Here n There</p>
          <p>I be around</p>
        </div>

        
      </div>
    </div>
  )
}
export default Contact