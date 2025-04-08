import React, { useState } from 'react';



function Home() {

  // variables for setting up a partial view once pictures are click on
  const [partialViewImage, setPartialViewImage] = useState(null); 
  return (
    <div> {/* Parent div so I return only one element*/}
      <main className ="pt-40"> 
        <div className="max-w-screen-xl w-11/12 mx-auto bg-[#17171A]">  
          <div className="w-full flex justify-center items center flex-col">
            {/* Fishing Gallery */}
            <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto bg-[#1F1F23] flex flex-col justify-center items-center p-4 m-6 h-auto custom-shadow-blue">
              <h3 className="font-bold">Fishing Gallery</h3>
                {/* If image is clicked, set it to the partial view image */}
                <img src="/main_fish.jpg" alt="fish picture" className="w-[100%] md:w-[96%] lg:w-[90%] 
                  pt-4 mt-4 max-h-[500px] h-auto rounded-md object-cover"
                  onClick={() => setPartialViewImage("/main_fish.jpg")} 
                /> 
              <button className="p-4 m-6 hover:text-[#FFF] hover:border-[#FFF] border border-2 border-[#189fd6]
                w-60% lg:w-[33.333%] font-bold
                hover:shadow-[0_0_0_4px_rgba(9,59,176,0.75)] transition-all duration-300 ease-in-out hover:scale-105">SEE MORE
              </button>
            </div>
            {/* Hunting Gallery */}
            <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto bg-[#1F1F23] flex flex-col justify-center items-center p-4 m-6 h-auto custom-shadow-blue">
              <h3 className="font-bold">Hunting Gallery</h3>
              {/* If image is clicked, set it to the partial view image */}
              <img src="/main_hunting.jpg" alt="bird hunting picture" className="w-[100%] md:w-[96%] 
                lg:w-[90%] pt-4 mt-4 h-auto rounded-md object-cover max-h-[500px]"
                onClick={() => setPartialViewImage("/main_hunting.jpg")}/>
              <button className="p-4 m-6 hover:text-[#FFF] hover:border-[#FFF] border border-2 border-[#189fd6]
                w-60% lg:w-[33.333%] font-bold
                hover:shadow-[0_0_0_4px_rgba(9,59,176,0.75)] transition-all duration-300 ease-in-out hover:scale-105">SEE MORE
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Setting up partial view over the main page content */}
      {/* Only displays image if partial view is not null */}
      {partialViewImage && (
        // z index to 50, so it appears over other content, inset streches to cover viewport, once screen is click again partialViewImage is back to null
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setPartialViewImage(null)}
        >
          {/* Background of regular page. Use div with transparent background to see content behind it (also takes up whole viewport) */}
          <div className="absolute inset-0 bg-[#121111] opacity-50"></div> 
          {/*Partial view container for image being rendered in 'fullscreen' */}
          <div className="relative bg-[#17171A] p-4 rounded shadow-lg w-[100%] md:w-[80%] max-w-[1280px] h-auto max-h-[80vh] flex items-center justify-center">
            <img
            src={partialViewImage}
            alt="enlarged view of image clicked on"
            className="w-full h-auto max-h-[80vh] object-contain rounded-md md:p-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;