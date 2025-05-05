import React, { useState } from "react";

function FishGallery() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5">Hunting Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          {/* Using Ansync do decode all images asynchronously for better load times, and to fix animation problems */}
          <img src="hunting1.jpg" loading="lazy" decoding="async" alt="Fish 2" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="hunting2.jpeg" loading="lazy" decoding="async" alt="Fish 6" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="hunting3.jpg" loading="lazy" decoding="async" alt="Fish 3" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="hunting4.jpg" loading="lazy" decoding="async" alt="Fish 4" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="hunting5.jpg" loading="lazy" decoding="async" alt="Fish 5" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="hunting6.jpg" loading="lazy" decoding="async" alt="Fish 1" className="w-full aspect-3/4 h-full object-cover" />
        </div>
      </div>

      {!showMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="p-4 m-6 hover:text-[#FFF] hover:border-[#FFF] border border-2 border-[#FFF]
            w-60% lg:w-[33.333%] font-bold
            hover:picture-shadow transition-all duration-300 ease-in-out hover:scale-105"
          >
            MORE PICS
          </button>
        </div>
      )}

      {showMore && (
        <div className="mt-6">
          <h2 className="text-xl">That's all, folks.</h2>
          
        </div>
      )}
    </div>
  );
}

export default FishGallery;
