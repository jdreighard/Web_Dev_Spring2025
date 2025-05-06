import React, { useState } from "react";

function FishGallery() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5">Fishing Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          {/* Using async do decode all images asynchronously for better load times, and to fix animation problems */}
          <img src="fish2.jpg" loading="lazy" decoding="async" alt="Fish 2" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="fish6.jpg" loading="lazy" decoding="async" alt="Fish 6" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="fish3.jpg" loading="lazy" decoding="async" alt="Fish 3" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="fish4.jpg" loading="lazy" decoding="async" alt="Fish 4" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="fish5.jpg" loading="lazy" decoding="async" alt="Fish 5" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
          <img src="fish1.jpg" loading="lazy" decoding="async" alt="Fish 1" className="w-full aspect-3/4 h-full object-cover" />
        </div>
      </div>

      {!showMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="p-4 m-6 hover:text-[#FFF] hover:border-[#FFF] border border-2 border-[#FFF]
            w-[60%] lg:w-[33.333%] font-bold
            transition-all duration-300 ease-in-out hover:scale-105"
          >
            MORE FISH
          </button>
        </div>
      )}

      {showMore && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish8.jpg" loading="lazy" decoding="async" alt="Fish 8" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish13.jpg" loading="lazy" decoding="async" alt="Fish 13" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish9.jpg" loading="lazy" decoding="async" alt="Fish 9" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish10.jpg" loading="lazy" decoding="async" alt="Fish 10" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish20.jpg" loading="lazy" decoding="async" alt="Fish 20" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish12.jpg" loading="lazy" decoding="async" alt="Fish 12" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish7.jpg" loading="lazy" decoding="async" alt="Fish 7" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish14.jpg" loading="lazy" decoding="async" alt="Fish 14" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish15.jpg" loading="lazy" decoding="async" alt="Fish 15" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish16.jpg" loading="lazy" decoding="async" alt="Fish 16" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish17.jpg" loading="lazy" decoding="async" alt="Fish 17" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish18.jpg" loading="lazy" decoding="async" alt="Fish 18" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish19.jpg" loading="lazy" decoding="async" alt="Fish 19" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish11.jpg" loading="lazy" decoding="async" alt="Fish 11" className="w-full aspect-3/4 h-full object-cover" />
          </div>
          <div className="picture-shadow hover:scale-105 duration-300 ease-in-out">
            <img src="fish21.jpg" loading="lazy" decoding="async" alt="Fish 21" className="w-full aspect-3/4 h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FishGallery;
