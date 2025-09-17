// components/ImageCarousel.js
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Enhanced autoplay with hover pause
  useEffect(() => {
    if (isPlaying && !isHovered && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [images.length, isPlaying, isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
        <p className="text-slate-500 dark:text-slate-400">No images available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-64 sm:h-80 lg:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/90 p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}

        {/* Play/Pause Button */}
        {images.length > 1 && (
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="m7 4 10 6L7 16V4z"/>
              </svg>
            )}
          </motion.button>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="p-4 bg-white dark:bg-slate-900">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-800'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-indigo-500/20"></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar for Autoplay */}
      {images.length > 1 && isPlaying && !isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}

      {/* Dot Indicators (Alternative to thumbnails) */}
      {images.length > 1 && images.length <= 5 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Loading State for Images */}
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse rounded-2xl -z-10"></div>
    </div>
  );
}
