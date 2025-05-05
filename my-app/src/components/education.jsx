import React from 'react';

function Education() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col w-11/12 mx-auto bg-[#17171A] py-10 picture-shadow rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-8">School</h1>
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6">
          <h2 className="text-xl font-bold border-b-2 border-[#093BB0] w-fit">High School</h2>
          </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="mb-2 text-lg font-semibold">School Related Info</h3>
          <p className="mb-1">Cumulative GPA: 3.8</p>
          <p>Accomplishment: 9th place in Northwest College photography contest</p>
        </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="text-lg font-semibold mb-2">Activities</h3>
          <p className="mb-1">Soccer: 2 years</p>
          <p>Work: Got credit for working during high school</p>
        </div>

        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto p-6">
          <h2 className="text-xl font-bold border-b-2 border-[#093BB0] w-fit">College</h2>
        </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="mb-2 text-lg font-semibold">School Related Info</h3>
          <p className="mb-1">Current Year: Freshman</p>
          <p>Current GPA: 3.792</p>
        </div>

        {/* Content Box */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#1F1F23] rounded-lg custom-shadow-blue mx-auto mb-6 p-6">
          <h3 className="text-lg font-semibold mb-2 ">Other Things</h3>
          <p className="mb-1">Internship: Interning at Tempest Tech for exposure to the CS field.</p>
          <p>Sometimes skip class to go fishing. (Don’t snitch.)</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
