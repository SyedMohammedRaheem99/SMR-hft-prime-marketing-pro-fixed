// components/ImageCarousel.js
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <button
          onClick={prev}
          aria-label="previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow"
        >
          ‹
        </button>

        <div className="overflow-hidden rounded-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="relative w-full h-[320px] md:h-[420px]"
            >
              <Image
                src={images[index]}
                alt={`slide-${index}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="next"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 dark:bg-slate-800/80 rounded-full shadow"
        >
          ›
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-slate-900 dark:bg-white" : "bg-slate-300/60 dark:bg-slate-600/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
