// components/ImageCarousel.js
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Autoplay every 5s
  useEffect(() => {
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000
    );
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.45 }}
          className="relative w-full h-auto flex justify-center"
        >
          <Image
            src={images[index]}
            alt={`slide-${index}`}
            width={900}
            height={500}
            className="rounded-lg object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="bg-white/70 dark:bg-slate-800/70 p-2 rounded-full shadow"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="bg-white/70 dark:bg-slate-800/70 p-2 rounded-full shadow"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
