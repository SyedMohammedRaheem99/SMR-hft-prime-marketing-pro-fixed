// components/ImageCarousel.js - Fixed Complete Version
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images, projectTitle = "Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const timerRef = useRef(null);

  // Enhanced autoplay with hover pause
  useEffect(() => {
    if (isPlaying && !isHovered && images && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [images, isPlaying, isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-slate-500 dark:text-slate-400">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Display */}
      <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              fill
              className="object-contain bg-white dark:bg-slate-900"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              onLoad={() => handleImageLoad(currentIndex)}
            />
            
            {/* Loading overlay */}
            {!imageLoaded[currentIndex] && (
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse flex items-center justify-center">
                <div className="text-slate-400">Loading...</div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 p-3 rounded-full shadow-xl backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 p-3 rounded-full shadow-xl backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}

        {/* Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Image Counter */}
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            {currentIndex + 1} of {images.length}
          </div>

          {/* Play/Pause Button */}
          {images.length > 1 && (
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/95 dark:bg-slate-900/95 p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/50"
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
        </div>

        {/* Progress Bar */}
        {images.length > 1 && isPlaying && !isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
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
                  alt={`${projectTitle} thumbnail ${index + 1}`}
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
    </div>
  );
}
