import { useState } from "react";
import Image from "next/image";

export default function ImageCarousel({ images = [], projectTitle = "Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden">
      <div className="relative w-full h-96">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>
      {images.length > 1 && (
        <div className="p-4">
          <div className="flex gap-2 justify-center">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
