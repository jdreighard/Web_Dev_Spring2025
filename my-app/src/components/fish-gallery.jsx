import React, { useState } from 'react';
function FishGallery() {
  const [partialViewImage, setPartialViewImage] = useState(null); 
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="/fish2.jpg" alt="Fish Picture located inside fish gallery" className="w-full" 
          onClick={() => setPartialViewImage("/fish2.jpg")}/>
        <img src="/fish6.jpg" alt="Fish Picture located inside fish gallery" className="w-full" />
        <img src="/fish3.jpg" alt="Fish Picture located inside fish gallery" className="w-full" />
        <img src="/fish4.jpg" alt="Fish Picture located inside fish gallery" className="w-full" />
        <img src="/fish5.jpg" alt="Fish Picture located inside fish gallery" className="w-full" />
        <img src="/fish1.jpg" alt="Fish Picture located inside fish gallery" className="w-full" />
      </div>
      {partialViewImage && (
        // z index to 50, so it appears over other content, inset streches to cover viewport, once screen is click again partialViewImage is back to null
        <div className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setPartialViewImage(null)}
        >
          {/* Background of regular page. Use div with transparent background to see content behind it (also takes up whole viewport) */}
          <div className="absolute inset-0 bg-[#121111] opacity-50"></div> 
          {/*Partial view container for image being rendered in 'fullscreen' */}
          <div className="relative bg-[#17171A] p-4 rounded shadow-lg w-[100%] md:w-[90%] max-w-[1280px] h-auto flex items-center justify-center">
            <img
            src={partialViewImage}
            alt="enlarged view of image clicked on"
            className="w-full h-auto object-contain rounded-md md:p-4"
            />
          </div>
        </div>
      )}
    </div>
    
  
  )
}
export default FishGallery