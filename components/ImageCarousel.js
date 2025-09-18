// components/ImageCarousel.js - Minimal Working Version
import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images = [], projectTitle = "Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-slate-100 rounded-2xl flex items-center justify-center">
        <p className="text-slate-500">No images available</p>
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-slate-50 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative w-full h-96">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          fill
          className="object-contain bg-white"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            >
              →
            </button>
          </>
        )}
        
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  );
}
