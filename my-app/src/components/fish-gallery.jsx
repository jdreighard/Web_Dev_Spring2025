import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function FishGallery() {
  const [showMore, setShowMore] = useState(false);
  const base = import.meta.env.BASE_URL;  

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5">Fishing Gallery</h1>

      {/* -------- FIRST SIX IMAGES -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="custom-shadow-blue">
          <img src={`${base}fish2.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue">
          <img src={`${base}fish6.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue">
          <img src={`${base}fish3.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div>
          <img src={`${base}fish4.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div>
          <img src={`${base}fish5.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div>
          <img src={`${base}fish1.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
      </div>
      
      {!showMore && (
        <div>
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-3 w-2/3 lg:w-1/3 border-2 border-[#189fd6]
                       font-bold hover:text-white hover:border-white
                       transition transform hover:scale-105"
          >
            LOAD MORE
          </button>
        </div>
      )}

      {showMore && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div><LazyLoadImage src={`${base}fish8.jpg`}  alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish13.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish9.jpg`}  alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish10.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish20.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish12.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish7.jpg`}  alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish14.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish15.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish16.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish17.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish18.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish19.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish11.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
          <div><LazyLoadImage src={`${base}fish21.jpg`} alt="Fish" effect="blur" className="w-full aspect-3/4 h-full object-cover" /></div>
        </div>
      )}
    </div>
  );
}

export default FishGallery;
