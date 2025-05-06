import React from 'react';

function About() {
  return (
    <div className="max-w-screen-xl mx-auto pb-20 w-[96%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
      <div className="flex flex-col justify-center items-center bg-[#17171A] p-10 rounded-xl picture-shadow">
        <div className="inline-block text-right bg-[#1F1F23] p-6 rounded-lg custom-shadow-blue w-full">
          <h1 className="border-b-4 border-[#189fd6] font-bold text-3xl md:text-5xl text-center mb-4">
            JD Reighard
          </h1>

          <div className="block border-b-2 border-[#093BB0] mb-2 w-full">
            <p className="text-white text-lg text-right">College Student</p>
          </div>
          <div className="block border-b-2 border-[#093BB0] mb-2 w-full">
            <p className="text-white text-lg text-right">Outdoorsman</p>
          </div>
          <div className="block border-b-2 border-[#093BB0] mb-2 w-full">
            <p className="text-white text-lg text-right">Web Developer Intern</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
