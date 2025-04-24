import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function FishGallery() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-5">Fishing Gallery</h1>

      {/* -------- FIRST SIX IMAGES -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="custom-shadow-blue">
          <img
            src="/fish2.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
        <div className="custom-shadow-blue"> 
          <img
            src="/fish6.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
        <div  className="custom-shadow-blue">
          <img
            src="/fish3.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fish4.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fish5.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fish1.jpg"
            alt="Fish"
            className="w-full aspect-3/4 h-full object-cover"
          />
        </div>
      </div>

      {/* -------- LOAD MORE BUTTON -------- */}
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

      {/* -------- EXTRA IMAGES -------- */}
      {showMore && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <LazyLoadImage
              src="/fish8.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish13.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish9.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish10.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish20.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish12.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish7.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish14.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish15.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish16.jpg"
              alt="Fish"
              effect="blur"
              className="w-full h-full aspect-3/4 object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish17.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4  h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish18.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish19.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish11.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/fish21.jpg"
              alt="Fish"
              effect="blur"
              className="w-full aspect-3/4 h-full object-cover"
            />
          </div>

        </div>
      )}
    </div>
  );
}

export default FishGallery;
