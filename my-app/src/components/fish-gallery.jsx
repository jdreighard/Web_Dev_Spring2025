import React, { useState } from 'react';

function FishGallery() {
  const [partialViewImage, setPartialViewImage] = useState(null);

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wrapping each image in a div to enforce aspect ratio */}
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish2.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish2.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish6.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish6.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish3.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish3.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish4.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish4.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish5.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish5.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish1.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish1.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish7.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish7.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish8.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish8.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish9.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish9.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish10.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish10.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish11.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish11.jpg")}
          />
        </div>

        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src="/fish12.jpg"
            alt="Fish Picture located inside fish gallery"
            className="w-full h-full object-cover"
            onClick={() => setPartialViewImage("/fish12.jpg")}
          />
        </div>
      </div>

      {partialViewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setPartialViewImage(null)}>
          <div className="absolute inset-0 opacity-50"></div>
          <div className="relative bg-[rgba(23,23,26,0.8)] p-4 rounded shadow-lg w-[100%] md:w-[90%] max-w-[1280px] h-auto flex items-center justify-center">
            <img
              src={partialViewImage}
              alt="enlarged view of image clicked on"
              className="w-[50%] h-auto rounded-md md:p-4"
            />
        </div>
        </div>
      )}
    </div>
  );
}

export default FishGallery;
