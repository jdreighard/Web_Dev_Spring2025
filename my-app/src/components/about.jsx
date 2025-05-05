import React from 'react';

function About() {
  return (
    <div className="max-w-screen-xl mx-auto w-11/12">
      <div className="flex flex-col justify-center items-center bg-[#17171A] p-10 rounded-xl min-h-[60vh] picture-shadow">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] bg-[#1F1F23] py-10 px-5 rounded-lg custom-shadow-blue">
          
          {/* Centered block with right-aligned text */}
          <div className="flex flex-col items-center">
            <h2 className="text-right border-b-4 border-[#189fd6] font-bold text-5xl mb-6 w-fit text-white">
              JD Reighard
            </h2>

            <div className="w-fit text-right">
              <div className="border-b-2 border-[#093BB0] mb-2">
                <p className="text-white text-lg">College Student</p>
              </div>
              <div className="border-b-2 border-[#093BB0] mb-2">
                <p className="text-white text-lg">Outdoorsman</p>
              </div>
              <div className="border-b-2 border-[#093BB0] mb-2">
                <p className="text-white text-lg">Web Developer Intern</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
