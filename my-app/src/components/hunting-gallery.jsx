import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HuntingGallery() {
  const [showMore, setShowMore] = useState(false);
  const base = import.meta.env.BASE_URL;  

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5">Hunting Gallery</h1>

      {/* -------- FIRST SIX IMAGES -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
          <img src={`${base}fish2.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
          <img src={`${base}fish6.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
          <img src={`${base}fish3.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
          <img src={`${base}fish4.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
          <img src={`${base}fish5.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
        <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out"> 
          <img src={`${base}fish1.jpg`} alt="Fish" className="w-full aspect-3/4 h-full object-cover" />
        </div>
      </div>

      {!showMore && (
        <div>
          <button
            onClick={() => setShowMore(true)}
            className="p-4 m-6 hover:text-[#FFF] hover:border-[#FFF] border border-2 border-[#189fd6]
            w-60% lg:w-[33.333%] font-bold
            hover:shadow-[0_0_0_4px_rgba(9,59,176,0.75)] transition-all duration-300 ease-in-out hover:scale-105"
            >SEE MORE
          </button>
        </div>
      )}

      {showMore && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish8.jpg`}  alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover" />
            </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish13.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish9.jpg`}  alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish10.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish20.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish12.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish7.jpg`}  alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish14.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish15.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish16.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish17.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish18.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish19.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish11.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
          <div className="custom-shadow-blue hover:scale-105 duration-300 ease-in-out">
            <LazyLoadImage src={`${base}fish21.jpg`} alt="Fish" effect="blur" 
            className="w-full aspect-3/4 h-full object-cover"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default HuntingGallery;
