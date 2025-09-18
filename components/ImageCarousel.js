// components/ImageCarousel.js - Final Complete Version
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images, projectTitle = "Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const timerRef = useRef(null);

  // Enhanced autoplay with hover pause
  useEffect(() => {
    if (isPlaying && !isHovered && !isFullscreen && images && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [images, isPlaying, isHovered, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isFullscreen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen, images]);

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
    <>
      {/* Main Carousel */}
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
              className="absolute inset-0 cursor-zoom-in"
              onClick={() => setIsFullscreen(true)}
            >
              <Image
                src={images[currentIndex]}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                fill
                className="object-contain bg-white dark:bg-slate-900 transition-transform duration-500 hover:scale-[1.02]"
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

              {/* Zoom indicator */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                🔍 Click to zoom
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 p-4 rounded-full shadow-xl backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-900/95 p-4 rounded-full shadow-xl backdrop-blur-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
